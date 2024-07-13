"use client";
import { styled, Container, Box } from "@mui/material";

export const ImageContentWrapper = styled(Box)`
  padding: 20px 10px;

  @media (min-width: 768px) {
    max-width: 1400px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const ImageContainer = styled("div")`
  padding: 20px 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 20px 0;
    gap: 15px;
  }
`;
export const ImageBox = styled(Box)`
  position: relative;
  img {
    width: 450px;
    height: 250px;
    object-fit: cover;
  }
`;
export const CardContainer = styled(Box)`
  //border: 1px solid #000;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
`;
export const CardDescription = styled(Box)`
  padding: 5px;
`;
