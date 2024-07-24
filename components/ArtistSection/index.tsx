"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Container, Grow, Grid, CircularProgress } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Skeleton from "@mui/material/Skeleton";
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

const ArtistSkeleton = () => (
  <ArtistSectionCard>
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Box sx={{ pt: 0.5 }}>
      <Skeleton width="60%" />
      <Skeleton />
      <Skeleton width="80%" />
    </Box>
  </ArtistSectionCard>
);

const ArtistSection: React.FC = () => {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const router = useRouter();

  const { data: artists, isLoading, isError, error } = useArtistData();

  const handleArtistClick = (artistId: number) => {
    router.push(`/artist/${artistId}`);
  };
  return (
    <ArtistSectionWrapper id="menu-about">
      <Container sx={{ mt: 3 }}>
        <ArtistSectionTitle variant="h4">ARTISTAS CAMART</ArtistSectionTitle>
        {isLoading ? (
          <>
            <ArtistSkeleton />
            <ArtistSkeleton />
          </>
        ) : isError ? (
          <div>Error fetching artists: {error.message}</div>
        ) : artists && artists.length > 0 ? (
          artists.map((artist: Artist) => (
            <motion.div
              key={artist.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{ cursor: "pointer" }}
            >
              <ArtistSectionCard
                onMouseEnter={() => setHoveredArtist(artist.id)}
                onMouseLeave={() => setHoveredArtist(null)}
              >
                <ArtistImageContainer>
                  {artist.imageUrl && (
                    <Image
                      src={parseImageUrl(artist.imageUrl)}
                      alt={artist.name}
                      priority
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </ArtistImageContainer>
                <ArtistContentContainer>
                  <ArtistName variant="h5" sx={{ textTransform: "uppercase" }}>
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
          ))
        ) : (
          <div>No artists found</div>
        )}
      </Container>
    </ArtistSectionWrapper>
  );
};

export default ArtistSection;
