import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakub Serweta",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
