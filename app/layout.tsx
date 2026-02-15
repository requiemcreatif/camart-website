"use client";
import React from "react";
import { ReactQueryProviders } from "./react-query-provider";
import { ThemeProvider } from "../components/ThemeContext";
import { CookieBanner } from "@/components/website/CookieBanner";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReactQueryProviders>
          <ThemeProvider>
            {children}
            <CookieBanner />
          </ThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
