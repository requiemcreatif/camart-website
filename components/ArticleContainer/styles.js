"use client";
import { styled, Box } from "@mui/material";

export const ImageContentWrapper = styled(Box)`
  padding: 40px 0;
  background-color: #f5f5f5;
`;

export const ImageContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

export const CardContainer = styled(Box)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;

export const ImageBox = styled(Box)`
  position: relative;
  height: 200px;
`;

export const CardDescription = styled(Box)`
  padding: 16px;
`;

export const ButtonContainer = styled(Box)`
  z-index: 10;
  position: absolute;
  top: 10px;
  left: 10px;
`;
