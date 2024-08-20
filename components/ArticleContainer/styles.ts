"use client";
import { styled, Box } from "@mui/material";
import { Theme } from "@mui/material/styles";

export const ImageContentWrapper = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    padding: "40px 0",
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[900] // Lighter than default dark background
        : theme.palette.grey[100], // Darker than default light background
  })
);

export const ImageContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

export const CardContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: "relative",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[3],
    cursor: "pointer",
  },
}));

export const ImageBox = styled(Box)`
  position: relative;
  height: 200px;
`;

export const CardDescription = styled(Box)(({ theme }: { theme: Theme }) => ({
  padding: "16px 24px",
  color: theme.palette.text.primary,
}));

export const ButtonContainer = styled(Box)`
  z-index: 10;
  position: absolute;
  top: 10px;
  left: 10px;
`;
