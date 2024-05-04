"use client";
import { styled, Container, Box } from "@mui/material";

export const ImageContentWrapper = styled(Box)`
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export const ImageContainer = styled("div")`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const ImageBox = styled("div")`
  img {
    width: 800px;
    height: 550px;
    object-fit: cover;
  }
`;
