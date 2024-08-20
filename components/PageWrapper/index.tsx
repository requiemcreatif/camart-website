// components/PageWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Header } from "../Header";
import ArticleContainer from "../ArticleContainer";
import CookieDisclaimer from "../CookieDisclaimer";
import NewsletterPopup from "../NewsletterPopup";
import ArtistSection from "../ArtistSection";
import { useThemeToggle } from "../ThemeContext";

export const PageWrapper: React.FC = () => {
  const { toggleTheme } = useThemeToggle();
  const ContactForm = dynamic(() => import("../ContactForm"), { ssr: false });

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
