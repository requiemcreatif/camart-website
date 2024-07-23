import { styled, Container, Typography, Box, Paper } from "@mui/material";

export const PageWrapper = styled(Box)`
  margin-top: 64px;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const StyledContainer = styled(Container)`
  padding-top: 64px;
  padding-bottom: 64px;
`;

export const ArtistPaper = styled(Paper)`
  padding: 32px;
  border-radius: 16px;
  overflow: hidden;
`;

export const ImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const ArtistName = styled(Typography)`
  //margin-bottom: 8px;
  font-weight: 600;
`;

export const ArtistShortBio = styled(Typography)`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const SocialIconsContainer = styled(Box)`
  margin-bottom: 12px;
`;

export const BiographyTitle = styled(Typography)`
  margin-bottom: 8px;
`;

export const BiographyText = styled(Typography)`
  font-weight: 300;
`;
