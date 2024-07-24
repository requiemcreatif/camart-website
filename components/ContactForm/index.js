"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { camartData } from "@/data/camartData";
import { ContactFormWrapper, ContactTextField } from "./styles";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
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
                <ContactTextField
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ContactTextField
                  fullWidth
                  label="Apellido"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <ContactTextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <ContactTextField
                  fullWidth
                  label="Mensaje"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox required />}
                  label="Acepto recibir noticias, fechas de gira y ofertas especiales."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ backgroundColor: "#a91d3a" }}
                >
                  Enviar
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
          |
          <Button color="primary" size="small">
            No vender mi información personal
          </Button>
        </Box>
      </ContactFormWrapper>
      <Divider sx={{ mt: 3, backgroundColor: "#9f9fa4" }} />
    </Box>
  );
};

export default ContactForm;
