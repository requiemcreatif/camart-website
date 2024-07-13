"use client";
import { styled, Container, Box } from "@mui/material";
import CamHeroImage from "../../public/images/cam95.jpg";

export const HeroContainer = styled(Box)`
  //position: relative;
  //height: 70vh;
  background-color: #000;

  @media (min-width: 768px) {
    //height: 70vh;
    //padding: 30px 0;
  }
`;

export const ImageContentCover = styled(Box)`
  //position: absolute;
  /* top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); */
  background-color: #000;
`;
