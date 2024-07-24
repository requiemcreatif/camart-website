"use client";

import { useQuery } from "@tanstack/react-query";
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import { Artist } from "@/internal-api/artistData";
import { CircularProgress, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { parseImageUrl } from "@/utils/parseImageUrl";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ArtistPageWrapper from "@/components/ArtistPageWrapper";
import {
  PageWrapper,
  StyledContainer,
  ArtistPaper,
  ImageContainer,
  ArtistName,
  ArtistShortBio,
  SocialIconsContainer,
  BiographyTitle,
  BiographyText,
} from "./styles";

const fetchArtist = async (id: string): Promise<Artist> => {
  const response = await axios.get(`/api/artists/${id}`);
  return response.data;
};

export default function ArtistDetail({ id }: { id: string }) {
  const {
    data: artist,
    isLoading,
    isError,
  } = useQuery<Artist, Error>({
    queryKey: ["artist", id],
    queryFn: () => fetchArtist(id),
  });

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>Error loading artist</div>;
  if (!artist) return <div>Artist not found</div>;

  return (
    <ArtistPageWrapper>
      <StyledContainer>
        <ArtistPaper>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ImageContainer>
                {artist.imageUrl && (
                  <Image
                    src={parseImageUrl(artist.imageUrl)}
                    alt={artist.name}
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </ImageContainer>
            </Grid>
            <Grid item xs={12} md={8}>
              <ArtistName variant="h3">{artist.name}</ArtistName>
              <SocialIconsContainer>
                {artist.social.instagram && (
                  <IconButton
                    color="primary"
                    href={artist.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </IconButton>
                )}
                {artist.social.facebook && (
                  <IconButton
                    color="primary"
                    href={artist.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </IconButton>
                )}
                {artist.social.twitter && (
                  <IconButton
                    color="primary"
                    href={artist.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </IconButton>
                )}
                {artist.social.spotify && (
                  <IconButton
                    color="primary"
                    href={artist.social.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AudiotrackIcon />
                  </IconButton>
                )}
              </SocialIconsContainer>
              <BiographyText variant="body1">
                {HTMLReactParser(artist.fullBio)}
              </BiographyText>
            </Grid>
          </Grid>
        </ArtistPaper>
      </StyledContainer>
    </ArtistPageWrapper>
  );
}
