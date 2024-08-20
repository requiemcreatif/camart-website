import React from "react";
import { motion } from "framer-motion";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { SocialIconButton } from "../ArtistSection/styles";
import { useThemeToggle } from "../ThemeContext";

const ThemeToggle: React.FC = () => {
  const { mode, toggleTheme } = useThemeToggle();

  return (
    <SocialIconButton
      onClick={toggleTheme}
      aria-label="Toggle light/dark theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: mode === "dark" ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {mode === "dark" ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </motion.div>
    </SocialIconButton>
  );
};

export default ThemeToggle;
