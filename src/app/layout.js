import "./globals.css";

export const metadata = {
  title: "African Diaspora Channels",
  description: "African Diaspora Channels",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
