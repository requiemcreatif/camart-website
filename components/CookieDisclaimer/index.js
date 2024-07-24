"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Typography, Button, Container } from "@mui/material";

const CookieDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff", // Red background
        color: "#000",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        zIndex: 10,
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          Nos apasiona la música. Para ayudarnos a compartir esa pasión, nos
          gustaría usar cookies y tecnologías similares para personalizar tus
          experiencias en nuestros sitios y para publicitar en otros sitios.
          Para obtener más información y opciones adicionales, haz clic en
          Opciones de Cookies a continuación.{" "}
          <Link href="#" color="inherit" underline="always">
            Privacy Policy
          </Link>
          .
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setIsVisible(false)}
          sx={{
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "150px",
            "&:hover": { backgroundColor: "#a91d3a" },
          }}
        >
          Rechazar Todo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => setIsVisible(false)}
          sx={{
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "150px",
            "&:hover": { backgroundColor: "#a91d3a" },
          }}
        >
          Aceptar Todo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => {}}
          sx={{
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "160px",
            "&:hover": { backgroundColor: "#a91d3a" },
          }}
        >
          Elegir cookies
        </Button>
      </Box>
    </Box>
  );
};

export default CookieDisclaimer;
