"use client";

import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import {
  ImageContainer,
  CamartIntro,
  CamartIntroText,
  HeaderButtonContainer,
} from "../styles";

const ClientHeader = ({ logo, introText, description }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ImageContainer>
          <Image
            src={logo}
            alt="Cam Art Logo"
            width={250}
            height={200}
            layout="responsive"
          />
        </ImageContainer>
      </motion.div>
      <Box sx={{ mt: 4 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <CamartIntro variant="h4">{introText}</CamartIntro>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <CamartIntroText>{description}</CamartIntroText>
        </motion.div>
      </Box>
      <HeaderButtonContainer>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outlined" color="inherit" size="large">
            Contáctanos
          </Button>
        </motion.div>
      </HeaderButtonContainer>
    </>
  );
};

export default ClientHeader;
