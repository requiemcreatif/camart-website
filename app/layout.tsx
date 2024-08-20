"use client";
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactQueryProviders } from "./react-query-provider";
import { lightTheme, darkTheme } from "../components/providers/ThemeProvider";
import { ThemeProvider, useThemeToggle } from "../components/ThemeContext";
import Navbar from "../components/Navbar";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function ThemedApp({ children }: { children: React.ReactNode }) {
  const { mode } = useThemeToggle();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
    </MuiThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ReactQueryProviders>
          <ThemeProvider>
            <ThemedApp>{children}</ThemedApp>
          </ThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
