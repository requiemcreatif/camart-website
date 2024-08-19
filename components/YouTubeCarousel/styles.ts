import { styled, Box, Typography, IconButton } from "@mui/material";

export const CarouselWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#131313",
  borderRadius: "12px",
  padding: "20px",
  color: "#fff",
  margin: "20px auto",
  maxWidth: "100%",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

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
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));
