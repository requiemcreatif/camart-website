"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  TextField,
  Box,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CamartLogo from "../../public/images/cam_art_logo_white.png";
import { palette } from "@mui/system";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#cf2e2e",
    },
    background: {
      default: "#000",
      paper: "#131313",
    },
  },
});

const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        setHasShown(true);
      }, 10000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    handleClose();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "background.default",
            boxShadow: "none",
            maxWidth: "400px",
          },
        }}
      >
        <DialogContent>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "grey.500",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            py={4}
          >
            <Box width={100} height={80} position="relative">
              <Image
                src={CamartLogo}
                alt="CamArt Logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Typography variant="h5" align="center" gutterBottom>
              SUSCRÍBETE A NUESTRA NEWSLETTER
            </Typography>
            <Typography variant="body2" align="center" gutterBottom>
              ¡Mantente actualizado con las últimas noticias, lanzamientos y
              ofertas exclusivas de CamART!
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubscribe}
              sx={{ mt: 2, backgroundColor: "#cf2e2e" }}
            >
              SUSCRIBIRSE
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={handleClose}
              sx={{ mt: 1 }}
            >
              NO, GRACIAS
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default NewsletterPopup;
