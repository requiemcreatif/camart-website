import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Header } from "../Header";
import ArticleContainer from "../ArticleContainer";
import CookieDisclaimer from "../CookieDisclaimer";
import NewsletterPopup from "../NewsletterPopup";
import ArtistSection from "../ArtistSection";

interface PageWrapperProps {
  toggleTheme: () => void;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ toggleTheme }) => {
  const ContactForm = dynamic(() => import("../ContactForm"), { ssr: false });
  return (
    <Box>
      <NewsletterPopup />
      <Navbar toggleTheme={toggleTheme} />
      <Header />
      <ArtistSection />
      <ArticleContainer />
      <ContactForm />
      <Footer />
      <CookieDisclaimer />
    </Box>
  );
};
