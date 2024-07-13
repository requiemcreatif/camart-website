"use client";
import { styled, Container, Box, Typography, Button } from "@mui/material";

export const HeaderWrapper = styled(Box)`
  position: relative;
  color: #fff;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImageWrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const HeaderContainer = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

export const ImageContainer = styled(Box)`
  max-width: 300px;
  width: 100%;
  margin-bottom: 2rem;
`;

export const CamartIntro = styled(Typography)`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const CamartIntroText = styled(Typography)`
  font-size: 1rem;
  text-align: center;
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

export const HeaderButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
