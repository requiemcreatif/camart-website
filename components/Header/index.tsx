"use client";
import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { camartData } from "../../data/camartData";
import {
  HeaderWrapper,
  HeaderContainer,
  ImageContainer,
  CamartIntro,
  CamartIntroText,
  HeaderButtonContainer,
} from "./styles";

type camartData = {
  introText: string;
};

export const Header: React.FC = () => {
  const handleContactButtonClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();
    const contactSection = document.getElementById("menu-contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderWrapper id="menu-home">
      <HeaderContainer maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageContainer>
            <Image
              src="/images/cam_art_logo_white.png"
              alt="Cam Art Logo"
              width={250}
              height={200}
            />
          </ImageContainer>
        </motion.div>
        <Box sx={{ mt: 3, px: "10px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <CamartIntroText>{camartData.introText}</CamartIntroText>
          </motion.div>
        </Box>
        <HeaderButtonContainer>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="#menu-contacto"
              onClick={handleContactButtonClick}
            >
              Contáctanos
            </Button>
          </motion.div>
        </HeaderButtonContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
