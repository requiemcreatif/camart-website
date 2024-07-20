"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Container, Grow, CircularProgress } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/configs/options";
import axios from "axios";
import {
  ArtistSectionWrapper,
  ArtistSectionTitle,
  ArtistSectionCard,
  ArtistImageContainer,
  ArtistContentContainer,
  ArtistName,
  ArtistDescription,
  ActionContainer,
  ReadMoreButton,
  SocialIconButton,
} from "./styles";

interface Artist {
  id: number;
  name: string;
  content: string;
  shortBio: string;
  fullBio: string;
  imageUrl: string | null;
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
    spotify: string;
  };
}

const fetchArtists = async (): Promise<Artist[]> => {
  console.log("Fetching artists...");
  try {
    const response = await axios.get(
      `${options.baseUrl}/wp-json/omeruta/v1/artists`
    );
    console.log("API response:", JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};

const ArtistSection = () => {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const {
    data: artists,
    isLoading,
    isError,
    error,
  } = useQuery<Artist[], Error>({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  if (isLoading)
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  if (isError)
    return <Container>Error fetching artists: {error?.message}</Container>;
  if (!artists || artists.length === 0)
    return <Container>No artists found</Container>;

  return (
    <ArtistSectionWrapper id="menu-about">
      <Container sx={{ mt: 3 }}>
        <ArtistSectionTitle variant="h4">ARTISTAS CAMART</ArtistSectionTitle>
        {artists.map((artist: Artist) => (
          <motion.div
            key={artist.id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArtistSectionCard
              onMouseEnter={() => setHoveredArtist(artist.id)}
              onMouseLeave={() => setHoveredArtist(null)}
            >
              <ArtistImageContainer>
                <Image
                  src={artist.imageUrl || "/path/to/placeholder-image.jpg"}
                  alt={artist.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ArtistImageContainer>
              <ArtistContentContainer>
                <ArtistName
                  variant="h5"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  {artist.name}
                </ArtistName>
                <ArtistDescription variant="body1">
                  {artist.shortBio}
                </ArtistDescription>
                <ActionContainer>
                  <ReadMoreButton variant="contained">Leer más</ReadMoreButton>
                  <Box>
                    {["instagram", "twitter", "facebook"].map(
                      (social, index) => (
                        <Grow
                          in={hoveredArtist === artist.id}
                          key={social}
                          style={{ transformOrigin: "0 0 0" }}
                          {...(hoveredArtist === artist.id
                            ? { timeout: 1000 + index * 200 }
                            : {})}
                        >
                          <Link
                            href={
                              artist.social[
                                social as keyof typeof artist.social
                              ] || `https://www.${social}.com/`
                            }
                            passHref
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SocialIconButton>
                              {social === "instagram" && <InstagramIcon />}
                              {social === "twitter" && <TwitterIcon />}
                              {social === "facebook" && <FacebookIcon />}
                            </SocialIconButton>
                          </Link>
                        </Grow>
                      )
                    )}
                  </Box>
                </ActionContainer>
              </ArtistContentContainer>
            </ArtistSectionCard>
          </motion.div>
        ))}
      </Container>
    </ArtistSectionWrapper>
  );
};

export default ArtistSection;
