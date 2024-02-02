import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "Table Football",
  description: "Table Football Message Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
