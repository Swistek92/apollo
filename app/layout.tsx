import type { Metadata } from "next";
import "@/sass/main.css";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
  title: "Appolo",
  description: `
  12312321`,
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
