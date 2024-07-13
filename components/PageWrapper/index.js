import { Box } from "@mui/material";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Header } from "../Header";
import ImageContent from "../ImageContent";
import ContactForm from "../ContactForm";

export const PageWrapper = () => {
  return (
    <Box>
      <Navbar />
      <Header />
      <ImageContent />
      <ContactForm />
      <Footer />
    </Box>
  );
};
