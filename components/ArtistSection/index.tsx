"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Container, Grow } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { ArtistBio } from "../../utils/ArtistBio";
import { formatText } from "../../utils/formatText";
import { options } from "@/configs/options";
import { useQuery } from "@tanstack/react-query";
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

const fetchArtists = async () => {
  const response = await axios.get("/artists");
  return response.data;
};

const ArtistSection = () => {
  const baseUrl = options.baseUrl;
  const [hoveredArtist, setHoveredArtist] = useState(null);
  const {
    data: artists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching artists</div>;

  console.log(artists);

  return (
    <ArtistSectionWrapper id="menu-about">
      <Container sx={{ mt: 3 }}>
        <ArtistSectionTitle variant="h4">ARTISTAS CAMART</ArtistSectionTitle>
        {artists.map((artist) => (
          <motion.div
            key={artist._id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArtistSectionCard
              onMouseEnter={() => setHoveredArtist(artist._id)}
              onMouseLeave={() => setHoveredArtist(null)}
            >
              <ArtistImageContainer>
                <Image
                  src={`${artist.imageUrl}`}
                  alt={artist.name}
                  fill
                  quality={100}
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
                          in={hoveredArtist === artist._id}
                          key={social}
                          style={{ transformOrigin: "0 0 0" }}
                          {...(hoveredArtist === artist._id
                            ? { timeout: 1000 + index * 200 }
                            : {})}
                        >
                          <Link
                            href={
                              artist[social] || `https://www.${social}.com/`
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
