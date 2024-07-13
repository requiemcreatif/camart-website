"use client";
import { styled, Container, Box, Typography } from "@mui/material";

export const FooterContainer = styled(Box)`
  //background-color: #131313;
  background-color: #000;
  color: #9f9fa4;
  padding: 35px 20px 20px;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
`;

export const FooterWrapper = styled(Container)`
  padding: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const FooterSocial = styled(Box)`
  padding: 0 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const FooterTextContent = styled(Box)`
  padding: 0 10px;
`;
export const FooterCopyrights = styled(Typography)`
  font-size: 0.7rem;
`;

export const FooterBottom = styled(Typography)`
  font-size: 0.6rem;
`;

export const FooterTerms = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 10px 0;
`;

export const FooterLink = styled(Typography)`
  display: flex;
  gap: 10px;
`;
