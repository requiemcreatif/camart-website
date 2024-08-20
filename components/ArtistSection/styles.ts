// components/ArtistSection/styles.ts

"use client";
import {
  styled,
  Box,
  Typography,
  Button,
  IconButton,
  IconButtonProps,
} from "@mui/material";

export const ArtistSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "40px 0",
}));

export const ArtistWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ArtistSectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: "32px",
  fontWeight: 700,
}));

export const ArtistSectionCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: `1px solid ${theme.palette.divider}`,
  "@media (min-width: 900px)": {
    flexDirection: "row",
    minHeight: "240px",
  },
}));

export const ArtistImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 300px;
  @media (min-width: 900px) {
    width: 40%;
    height: auto;
  }
`;

export const ArtistContentContainer = styled(Box)`
  padding: 20px;
  width: 100%;
  @media (min-width: 900px) {
    width: 60%;
  }
`;

export const ArtistName = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: "16px",
}));

export const ArtistDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 300,
  fontSize: "0.9rem",
  marginBottom: "24px",
}));

export const ActionContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReadMoreButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "8px 32px",
  borderRadius: "25px",
  cursor: "pointer",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const SocialIconButton = styled(IconButton)<IconButtonProps>(
  ({ theme }) => ({
    color: theme.palette.primary.main,
    marginLeft: "8px",
  })
);

export const BiographyText = styled(Box)(({ theme }) => ({
  fontWeight: 300,
  color: theme.palette.text.secondary,
  marginTop: "16px",
}));

export const SpotifyPlayerContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
  },
}));
