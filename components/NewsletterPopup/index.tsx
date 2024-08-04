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
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CamartLogo from "../../public/images/cam_art_logo_white.png";

// Define a type for Snackbar severity
type SnackbarSeverity = "success" | "error" | "warning" | "info";

const theme = createTheme({
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
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

const NewsletterPopup: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [hasShown, setHasShown] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<SnackbarSeverity>("success");
  const [confirmationOpen, setConfirmationOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        setHasShown(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/newsletter-subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setConfirmationOpen(true);
        setOpen(false);
        setEmail("");
      } else {
        setSnackbarMessage(
          data.message || "Ocurrió un error. Por favor, inténtalo de nuevo."
        );
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error de suscripción al boletín:", error);
      setSnackbarMessage("Ocurrió un error. Por favor, inténtalo de nuevo.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(19, 19, 19, 0.8)",
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
            gap={3}
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
            <Typography variant="h5" align="center" fontWeight="bold">
              SUSCRÍBETE A NUESTRA NEWSLETTER
            </Typography>
            <Typography variant="body2" align="center">
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
              sx={{ mt: 2 }}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Dialog
        open={confirmationOpen}
        onClose={handleCloseConfirmation}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(19, 19, 19, 0.8)",
            maxWidth: "400px",
          },
        }}
      >
        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
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
            <Typography variant="h5" align="center" fontWeight="bold">
              ¡Gracias por suscribirte!
            </Typography>
            <Typography variant="body2" align="center">
              Te has suscrito exitosamente a nuestra newsletter. Pronto
              recibirás las últimas noticias y ofertas exclusivas de CamART.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCloseConfirmation}
              sx={{ mt: 2 }}
            >
              Cerrar
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default NewsletterPopup;
