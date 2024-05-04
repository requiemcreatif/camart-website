import { Box, Container, Typography } from "@mui/material";
import { FooterWrapper, FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Typography>
          © 2024 | All rights reserved | Designed by:{" "}
          <a href="#">Requiem Creatif</a>
        </Typography>
      </FooterWrapper>
    </FooterContainer>
  );
};
