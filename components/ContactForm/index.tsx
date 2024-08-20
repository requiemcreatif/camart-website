"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
  ThemeProvider,
  createTheme,
  NoSsr,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { camartData } from "@/data/camartData";
import { ContactFormWrapper, ContactTextField } from "./styles";
import CamartLogo from "../../public/images/cam_art_logo_white.png";

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

interface FormData {
  name: string;
  lastname: string;
  email: string;
  message: string;
  newsletter: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    email: "",
    message: "",
    newsletter: false,
  });
  const [confirmationOpen, setConfirmationOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        console.log("Form submitted successfully:", response.data);
        setConfirmationOpen(true);
        setFormData({
          name: "",
          lastname: "",
          email: "",
          message: "",
          newsletter: false,
        });
      } else {
        throw new Error("Server responded with non-200 status");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (axios.isAxiosError(error) && error.response) {
        setError(
          error.response.data.message ||
            "An error occurred while submitting the form."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseConfirmation = () => {
    setConfirmationOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#131313",
          color: "#9f9fa4",
        }}
        id="menu-contacto"
      >
        <ContactFormWrapper>
          <Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <NoSsr>
                    <ContactTextField
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </NoSsr>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <NoSsr>
                    <ContactTextField
                      fullWidth
                      label="Apellido"
                      variant="outlined"
                      required
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </NoSsr>
                </Grid>
                <Grid item xs={12}>
                  <NoSsr>
                    <ContactTextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </NoSsr>
                </Grid>
                <Grid item xs={12}>
                  <NoSsr>
                    <ContactTextField
                      fullWidth
                      label="Mensaje"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </NoSsr>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                      />
                    }
                    label="Acepto recibir noticias, fechas de gira y ofertas especiales."
                  />
                </Grid>
                {error && (
                  <Grid item xs={12}>
                    <Typography color="error" variant="body2">
                      {error}
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ backgroundColor: "#a91d3a" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box>
            <Typography variant="body2" color="#9f9fa4">
              {camartData.contactIformation}
            </Typography>
            <Button color="primary" size="small">
              Política de privacidad
            </Button>{" "}
            {/* |
            <Button color="primary" size="small">
              No vender mi información personal
            </Button> */}
          </Box>
        </ContactFormWrapper>
        <Divider sx={{ mt: 3, backgroundColor: "#9f9fa4" }} />
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
            <IconButton
              onClick={handleCloseConfirmation}
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
                ¡Gracias por contactarnos!
              </Typography>
              <Typography variant="body2" align="center">
                Hemos recibido tu mensaje y nos pondremos en contacto contigo
                pronto.
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
      </Box>
    </ThemeProvider>
  );
};

export default ContactForm;
