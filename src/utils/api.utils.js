"use server";
// API call
const apiCall = async () => {
  let url = `${process.env.NEXT_PUBLIC_JSON_URL}`;
  // console.log("URL --- ", url);
  const response = await fetch(url);
  if (response.ok) {
    if (response.status !== 204) {
      const data = await response.json();
      return data;
    }
    return {
      data: null,
    };
  }

  if (!response.ok) {
    let data = await response.json();
    data = {
      ...data,
      statusCode: response.status,
      statusText: response.statusText,
    };
    return data;
  }
  const data = await response.json();
  return data;
};

export default apiCall;
