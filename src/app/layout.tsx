import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";
import Header from "./components/Header/Index";

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
          <Header />
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
