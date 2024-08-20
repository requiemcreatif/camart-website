// components/YouTubeCarousel/styles.ts
import { styled, Box, Typography, IconButton } from "@mui/material";

export const CarouselWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  padding: "20px",
  color: theme.palette.text.primary,
  margin: "20px auto",
  maxWidth: "100%",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

export const CarouselTitle = styled(Typography)({
  marginBottom: "10px",
  textAlign: "center",
});

export const VideoContainer = styled(Box)(({ theme }) => ({
  width: "560px",
  height: "315px",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "0",
    paddingBottom: "56.25%", // 16:9 aspect ratio
  },
}));

export const NavigationButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));
