import type { Metadata } from "next";
import "@/sass/main.css";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Appolo",
  description: `
  Get all sorts of information about previous Space X launches, like information about the rocket, astronauts, and more!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
