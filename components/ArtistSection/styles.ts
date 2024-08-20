"use client";
import {
  styled,
  Box,
  Typography,
  Button,
  IconButton,
  IconButtonProps,
} from "@mui/material";

export const ArtistSectionWrapper = styled(Box)`
  background-color: #000;
  padding: 40px 0;
`;
export const ArtistWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ArtistSectionTitle = styled(Typography)`
  color: #fff;
  margin-bottom: 32px;
  font-weight: 700;
`;

export const ArtistSectionCard = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 900px) {
    flex-direction: row;
    min-height: 240px;
  }
`;

export const ArtistImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 300px;
  @media (min-width: 900px) {
    width: 40%;
    height: auto;
    //min-height: 400px; // Ensure there's enough space for the image and player
  }
`;

export const ArtistContentContainer = styled(Box)`
  padding: 20px;
  width: 100%;

  @media (min-width: 900px) {
    width: 60%;
  }
`;

export const ArtistName = styled(Typography)`
  color: #fff;
  margin-bottom: 16px;
`;

export const ArtistDescription = styled(Typography)`
  color: #ccc;
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 24px;
`;

export const ActionContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReadMoreButton = styled(Button)`
  text-transform: none;
  padding: 8px 32px;
  border-radius: 25px;
  cursor: pointer;
  background-color: #40679e;
  &:hover {
    background-color: #115293;
  }
`;

export const SocialIconButton = styled(IconButton)<IconButtonProps>`
  color: #1976d2;
  margin-left: 8px;
`;

export const BiographyText = styled(Box)`
  font-weight: 300;
  color: #ccc;
  margin-top: 16px;
`;

export const SpotifyPlayerContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
  },
}));
