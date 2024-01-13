import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";
import TopHeader from "./components/Header/TopHeader";
import BottomHeader from "./page";

export const metadata: Metadata = {
  title: "Simple E-commerce",
  description: "A simple e commerce website challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <TopHeader />
          <BottomHeader />
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
