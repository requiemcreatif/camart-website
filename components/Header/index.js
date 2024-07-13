"use client";
import React from "react";
import Image from "next/image";
import { Container, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import CamartLogo from "../../public/images/cam_art_logo_white.png";
import CamHeroImage from "../../public/images/cam95.jpg";
import {
  HeaderWrapper,
  HeaderContainer,
  ImageContainer,
  CamartIntro,
  CamartIntroText,
  HeaderButtonContainer,
  BackgroundImageWrapper,
} from "./styles";

export const Header = () => {
  console.log("CamHeroImage.src: ", CamHeroImage.src);
  return (
    <HeaderWrapper>
      <BackgroundImageWrapper>
        <Image
          src={CamHeroImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </BackgroundImageWrapper>
      <HeaderContainer maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageContainer>
            <Image
              src={CamartLogo}
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
            <CamartIntro variant="h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CamartIntro>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <CamartIntroText>
              En Cam Art Booking, tenemos actualmente a varios artistas del
              mundo del Hip-hop/Reggae. Os dejamos sus distintos apartados
              profesionales, donde podréis ver su trayectoria y saber más sobre
              ellos y su música. Nuestro equipo estará encantado de resolver
              vuestras dudas y preguntas. Contratando un artista Cam Art,
              estarás impulsando un movimiento, la cultura y un espectáculo
              digno de ver cómo es "Cam Art Festival" ¿Quieres a algún artista
              de nuestra agenda? Contáctanos.
            </CamartIntroText>
          </motion.div>
        </Box>
        <HeaderButtonContainer>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outlined" color="inherit" size="large">
              Contáctanos
            </Button>
          </motion.div>
        </HeaderButtonContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
