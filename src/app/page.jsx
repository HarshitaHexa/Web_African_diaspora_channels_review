"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MiddleSection from "../components/MiddleSection";
import AppLoader from "../components/AppLoader";
import { getLiveChannelsData } from "../lib/services/api.service";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const liveData = await getLiveChannelsData();
        const sortedData = (liveData.livestreams || []).sort((a, b) => {
          return (a.display_order || 0) - (b.display_order || 0);
        });
        setData(sortedData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <AppLoader />
      </div>
    );
  if (!data.length)
    return (
      <div className="flex justify-center items-center h-screen font-bold text-white text-lg">
        No content available
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        title={data}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      />
      <main className="flex-grow">
        <MiddleSection videodata={data[selectedIndex]} />
      </main>
      <Footer />
    </div>
  );
}
