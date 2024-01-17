import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";
import Header from "./components/Header/Index";
import ProviderComponent from "./state/Provider";

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
      <ProviderComponent>
        <ThemeRegistry>
          <body>
            <Header />
            {children}
          </body>
        </ThemeRegistry>
      </ProviderComponent>
    </html>
  );
}
