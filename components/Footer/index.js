import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FooterWrapper,
  FooterContainer,
  FooterTerms,
  FooterLink,
  FooterTextContent,
  FooterCopyrights,
  FooterSocial,
  FooterBottom,
  SocialIconButton,
} from "./styles";

export const Footer = () => {
  const socialIcons = [
    { Icon: InstagramIcon, url: "#" },
    { Icon: FacebookIcon, url: "#" },
    { Icon: YouTubeIcon, url: "#" },
    { Icon: TwitterIcon, url: "#" },
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSocial>
          {socialIcons.map(({ Icon, url }, index) => (
            <SocialIconButton
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </SocialIconButton>
          ))}
        </FooterSocial>
        <FooterTextContent>
          <FooterCopyrights>
            © 2024 | All rights reserved | Designed by:{" "}
            <Link href="#" passHref>
              Requiem Creatif
            </Link>
          </FooterCopyrights>
          <FooterTerms>
            {["Contactanos", "Privacidad", "Terminos"].map((item, index) => (
              <React.Fragment key={item}>
                <FooterLink>
                  <Link href="#">{item}</Link>
                </FooterLink>
                {index < 2 && <span>|</span>}
              </React.Fragment>
            ))}
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
