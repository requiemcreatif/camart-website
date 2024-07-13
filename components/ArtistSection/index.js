"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container, Grow } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { formatText } from "@/utils/formatText";
import { ArtistBio } from "@/utils/ArtistBio";
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

const ArtistSection = () => {
  const [hoveredArtist, setHoveredArtist] = useState(null);

  return (
    <ArtistSectionWrapper>
      <Container /*maxWidth="lg"*/ sx={{ mt: 3 }}>
        <ArtistSectionTitle variant="h4">ARTISTAS CAMART</ArtistSectionTitle>
        {Object.entries(ArtistBio).map(([key, artist]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArtistSectionCard
              onMouseEnter={() => setHoveredArtist(key)}
              onMouseLeave={() => setHoveredArtist(null)}
            >
              <ArtistImageContainer>
                <Image
                  src={artist.image}
                  alt={artist.name}
                  layout="fill"
                  objectFit="cover"
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
                  {formatText(artist.bio)}
                </ArtistDescription>
                <ActionContainer>
                  <ReadMoreButton variant="contained">Leer más</ReadMoreButton>
                  <div>
                    {["instagram", "twitter", "facebook"].map(
                      (social, index) => (
                        <Grow
                          in={hoveredArtist === key}
                          key={social}
                          style={{ transformOrigin: "0 0 0" }}
                          {...(hoveredArtist === key
                            ? { timeout: 1000 + index * 200 }
                            : {})}
                        >
                          <SocialIconButton
                            component={Link}
                            href={`https://www.${social}.com/`}
                            target="_blank"
                          >
                            {social === "instagram" && <InstagramIcon />}
                            {social === "twitter" && <TwitterIcon />}
                            {social === "facebook" && <FacebookIcon />}
                          </SocialIconButton>
                        </Grow>
                      )
                    )}
                  </div>
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
