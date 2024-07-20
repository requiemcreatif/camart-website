"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Container, Grow, CircularProgress } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/configs/options";
import Image from "next/image";
import { parseImageUrl } from "../../utils/parseImageUrl";
import { formatText } from "@/utils/formatText";
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
  acfImageUrl: string | null;
  featuredImageUrl: string | null;
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
    spotify: string;
  };
}

const fetchArtists = async (): Promise<Artist[]> => {
  console.log("Fetching artists...");
  const baseUrl = options.baseUrl.endsWith("/")
    ? options.baseUrl.slice(0, -1)
    : options.baseUrl;
  const url = `${baseUrl}/wp-json/omeruta/v1/artists`;
  console.log("Fetching from URL:", url);

  try {
    const response = await axios.get<Artist[]>(url);

    // Transform image URLs
    const transformedArtists = response.data.map((artist) => ({
      ...artist,
      acfImageUrl: artist.acfImageUrl,
      featuredImageUrl: artist.featuredImageUrl,
      imageUrl: artist.imageUrl,
    }));

    console.log(
      "Transformed API response:",
      JSON.stringify(transformedArtists, null, 2)
    );
    return transformedArtists;
  } catch (error) {
    console.error("Error fetching artists:", error);
    if (axios.isAxiosError(error)) {
      console.error("Request config:", error.config);
      console.error("Response data:", error.response?.data);
    }
    throw error;
  }
};

const ArtistSection: React.FC = () => {
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
    return <Container>Error fetching artists: {error.message}</Container>;
  if (!artists || artists.length === 0)
    return <Container>No artists found</Container>;

  return (
    <ArtistSectionWrapper id="menu-about">
      <Container sx={{ mt: 3 }}>
        <ArtistSectionTitle variant="h4">ARTISTAS CAMART</ArtistSectionTitle>
        {artists.map((artist: Artist) => {
          const imageUrl = parseImageUrl(
            artist?.acfImageUrl || artist?.imageUrl || artist?.featuredImageUrl
          );
          console.log(`Artist: ${artist.name}, Parsed Image URL: ${imageUrl}`);

          return (
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
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={artist.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      No Image Available
                    </div>
                  )}
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
                    {formatText(artist.shortBio)}
                  </ArtistDescription>
                  <ActionContainer>
                    <ReadMoreButton variant="contained">
                      Leer más
                    </ReadMoreButton>
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
          );
        })}
      </Container>
    </ArtistSectionWrapper>
  );
};

export default ArtistSection;
