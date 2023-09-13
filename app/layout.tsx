import type { Metadata } from "next";
import "@/sass/main.css";

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
      <body>{children}</body>
    </html>
  );
}
