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
        //backgroundColor: "#cf2e2e", // Red background
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
          We are passionate about music. To help us share that passion we'd like
          to use cookies and similar technologies to personalize your
          experiences on our sites and to advertise on other sites. For more
          information and additional choices click Cookie Choices below.{" "}
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
          //size="small"

          onClick={() => setIsVisible(false)}
          sx={{
            //color: "#cf2e2e",
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "150px",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Rechazar Todo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          //size="small"
          onClick={() => setIsVisible(false)}
          sx={{
            //color: "#cf2e2e",
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "150px",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Aceptar Todo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          //size="small"
          onClick={() => {
            /* Implement cookie choices logic */
          }}
          sx={{
            //color: "#cf2e2e",
            color: "#fff",
            backgroundColor: "#000",
            textTransform: "none",
            width: "160px",
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          Elegir cookies
        </Button>
      </Box>
    </Box>
  );
};

export default CookieDisclaimer;
