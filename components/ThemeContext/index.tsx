// components/ThemeContext.tsx
import React from "react";

export const ThemeContext = React.createContext<(() => void) | undefined>(
  undefined
);

export const useThemeToggle = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeToggle must be used within a ThemeProvider");
  }
  return context;
};
