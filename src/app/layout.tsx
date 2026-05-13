import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuantumFan - Tournament Engagement",
  description: "Experience the next level of fan engagement with real-time predictions and gamified rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
