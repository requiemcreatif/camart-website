"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Container, Grow, CircularProgress } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import Image from "next/image";
import { parseImageUrl } from "../../utils/parseImageUrl";
import { formatText } from "@/utils/formatText";
import { useArtistData, Artist } from "@/internal-api/artistData";
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

const ArtistSection: React.FC = () => {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const router = useRouter();

  const { data: artists, isLoading, isError, error } = useArtistData();
  console.log("artist", artists);

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

  const handleArtistClick = (artistId: number) => {
    console.log("artistId", artistId);
    router.push(`/artist/${artistId}`);
  };
  return (
    <ArtistSectionWrapper id="menu-about">
      <Container sx={{ mt: 3 }}>
        <ArtistSectionTitle variant="h4">ARTISTAS CAMART</ArtistSectionTitle>
        {artists &&
          artists.map((artist: Artist) => {
            return (
              <motion.div
                key={artist.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                //onClick={() => handleArtistClick(artist.id)}
                style={{ cursor: "pointer" }}
              >
                <ArtistSectionCard
                  onMouseEnter={() => setHoveredArtist(artist.id)}
                  onMouseLeave={() => setHoveredArtist(null)}
                >
                  <ArtistImageContainer>
                    {artist?.imageUrl ? (
                      <Image
                        src={parseImageUrl(artist.imageUrl)}
                        alt={artist.name}
                        priority
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
                      <ReadMoreButton
                        onClick={() => handleArtistClick(artist.id)}
                        variant="contained"
                      >
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
