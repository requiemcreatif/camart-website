import { Box } from "@mui/material";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Header } from "../Header";
import ImageContent from "../ImageContent";
import ContactForm from "../ContactForm";
import CookieDisclaimer from "../CookieDisclaimer";
import NewsletterPopup from "../NewsletterPopup";

export const PageWrapper = () => {
  return (
    <Box>
      <NewsletterPopup />
      <Navbar />
      <Header />
      <ImageContent />
      <ContactForm />
      <Footer />
      <CookieDisclaimer />
    </Box>
  );
};
