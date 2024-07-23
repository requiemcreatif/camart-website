// File: components/ArtistSection.tsx

import React from "react";
import Link from "next/link";
import { Box, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import { parseImageUrl } from "@/utils/parseImageUrl";
import { formatText } from "@/utils/formatText";
import { getArtistsData, Artist } from "@/lib/useArtistData";
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

export default async function ArtistSection() {
  let artists: Artist[];
  try {
    artists = await getArtistsData();
  } catch (error) {
    console.error("Failed to fetch artists:", error);
    return <div>Error loading artists. Please try again later.</div>;
  }

  if (!artists || artists.length === 0) {
    return <div>No artists found.</div>;
  }

  return (
    <ArtistSectionWrapper id="menu-about">
      <Container sx={{ mt: 3 }}>
        <ArtistSectionTitle variant="h4">ARTISTAS CAMART</ArtistSectionTitle>
        {artists.map((artist: Artist) => (
          <div key={artist.id}>
            <ArtistSectionCard>
              <ArtistImageContainer>
                {artist.imageUrl ? (
                  <Image
                    src={`${parseImageUrl(artist.imageUrl)}`}
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
                  <ReadMoreButton variant="contained">Leer más</ReadMoreButton>
                  <Box>
                    {["instagram", "twitter", "facebook"].map((social) => (
                      <Link
                        key={social}
                        href={
                          artist.social[social as keyof typeof artist.social] ||
                          `https://www.${social}.com/`
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
                    ))}
                  </Box>
                </ActionContainer>
              </ArtistContentContainer>
            </ArtistSectionCard>
          </div>
        ))}
      </Container>
    </ArtistSectionWrapper>
  );
}
