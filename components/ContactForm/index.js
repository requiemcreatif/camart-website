import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { ContactFormWrapper, ContactTextField } from "./styles";

const ContactForm = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission here
  // };

  return (
    <Box
      sx={{
        backgroundColor: "#131313",
        //padding: "40px 0",
        color: "#9f9fa4",
      }}
    >
      <ContactFormWrapper>
        <Box>
          {/* <Typography variant="h4" component="h1" gutterBottom>
            Contactanos
          </Typography> */}
          <form /*onSubmit={handleSubmit}*/>
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
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box>
          <Typography variant="body2" color="#9f9fa4" /*sx={{ mt: 2 }}*/>
            Al enviar este formulario, acepto recibir noticias, fechas de gira y
            ofertas especiales de CamArt. Los correos electrónicos serán
            enviados por o en nombre de CamArt productions. Puede retirar su
            consentimiento en cualquier momento.
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
