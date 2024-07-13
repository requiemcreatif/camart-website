import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import {
  FooterWrapper,
  FooterContainer,
  FooterTerms,
  FooterLink,
  FooterTextContent,
  FooterCopyrights,
  FooterSocial,
  FooterBottom,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSocial>
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <XIcon />
        </FooterSocial>
        <FooterTextContent>
          <FooterCopyrights>
            © 2024 | All rights reserved | Designed by:{" "}
            <a href="#">Requiem Creatif</a>
          </FooterCopyrights>
          <FooterTerms>
            <FooterLink>
              <Link href="#">Contactanos</Link>
              <span>|</span>
            </FooterLink>
            <FooterLink>
              <Link href="#">Privacidad</Link>
              <span>|</span>
            </FooterLink>
            <FooterLink>
              <Link href="#">Terminos</Link>
              <span>|</span>
            </FooterLink>
          </FooterTerms>
          <FooterBottom variant="body2">
            Cam Art - Xoko Suizo - Requiem Creatif son marcas registradas. Todos
            los derechos reservados.
          </FooterBottom>
        </FooterTextContent>
      </FooterWrapper>
    </FooterContainer>
  );
};
