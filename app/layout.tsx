"use client";
import React, { useState, useMemo, useCallback } from "react";
import { Roboto } from "next/font/google";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactQueryProviders } from "./react-query-provider";
import { lightTheme, darkTheme } from "../components/providers/ThemeProvider";
import { ThemeContext } from "../components/ThemeContext";
import Navbar from "../components/Navbar";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    console.log("toggleTheme called in RootLayout");
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  console.log("Current theme mode:", mode);

  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ReactQueryProviders>
          <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={toggleTheme}>
              <CssBaseline />
              <Navbar />
              {children}
            </ThemeContext.Provider>
          </MuiThemeProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
