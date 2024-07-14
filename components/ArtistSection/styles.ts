"use client";
import {
  styled,
  Container,
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

export const ArtistSectionTitle = styled(Typography)`
  color: #fff;
  margin-bottom: 32px;
  font-weight: 700;
`;

export const ArtistSectionCard = styled(Box)`
  margin-bottom: 32px;
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
  }
`;

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

export const ArtistName = styled(Typography)`
  color: #fff;
  margin-bottom: 16px;
`;

export const ArtistDescription = styled(Typography)`
  color: #ccc;
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
  //background-color: #1976d2;
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
