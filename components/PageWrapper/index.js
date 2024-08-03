import { Box } from "@mui/material";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Header } from "../Header";
import ArticleContainer from "../ArticleContainer";
import ContactForm from "../ContactForm";
import CookieDisclaimer from "../CookieDisclaimer";
import NewsletterPopup from "../NewsletterPopup";
import ArtistSection from "../ArtistSection";

export const PageWrapper = () => {
  return (
    <Box>
      <NewsletterPopup />
      <Navbar />
      <Header />
      <ArtistSection />
      <ArticleContainer />
      <ContactForm />
      <Footer />
      <CookieDisclaimer />
    </Box>
  );
};
