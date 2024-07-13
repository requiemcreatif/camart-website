"use client";
import { styled, Container, Box, Typography, IconButton } from "@mui/material";

export const FooterContainer = styled(Box)`
  background-color: #000;
  color: #9f9fa4;
  padding: 40px 0;
`;

export const FooterWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSocial = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const SocialIconButton = styled(IconButton)`
  color: #9f9fa4;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #a91d3a;
    transform: translateY(-3px);
  }
`;

export const FooterTextContent = styled(Box)`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

export const FooterCopyrights = styled(Typography)`
  font-size: 0.8rem;
  margin-bottom: 10px;

  a {
    color: #9f9fa4;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #a91d3a;
    }
  }
`;

export const FooterTerms = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const FooterLink = styled(Typography)`
  font-size: 0.8rem;
  text-transform: uppercase;

  a {
    color: #9f9fa4;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #a91d3a;
    }
  }
`;

export const FooterBottom = styled(Typography)`
  font-size: 0.7rem;
  opacity: 0.7;
`;
