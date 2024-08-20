// export default ThemeToggle;
import React from "react";
import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { SocialIconButton } from "../ArtistSection/styles";
import { useThemeToggle } from "../ThemeContext";

const ThemeToggle: React.FC = () => {
  const theme = useTheme();
  const toggleTheme = useThemeToggle();

  return (
    <SocialIconButton
      onClick={toggleTheme}
      aria-label="Toggle light/dark theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme.palette.mode === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme.palette.mode === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </motion.div>
    </SocialIconButton>
  );
};

export default ThemeToggle;
