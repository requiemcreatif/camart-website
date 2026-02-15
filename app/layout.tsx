"use client";
import React from "react";
import { ReactQueryProviders } from "./react-query-provider";
import { ThemeProvider } from "../components/ThemeContext";
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
          </ThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
