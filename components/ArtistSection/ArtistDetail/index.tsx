import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaSpotify } from "react-icons/fa6";
import { Artist } from "@/internal-api/artistData";
import { parseImageUrl } from "../../../utils/parseImageUrl";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import YouTubeCarousel from "@/components/YouTubeCarousel";
import {
  ArtistSectionCard,
  ArtistImageContainer,
  ArtistContentContainer,
  ArtistName,
  ReadMoreButton,
  SocialIconButton,
  BiographyText,
  SpotifyPlayerContainer,
} from "../styles";

interface ArtistDetailProps {
  artist: Artist;
  onBackClick: () => void;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onBackClick }) => {
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, [artist]);

  return (
    <Box ref={detailRef} sx={{ position: "relative" }}>
      <ReadMoreButton onClick={onBackClick} variant="contained" sx={{ mb: 3 }}>
        Volver a la lista
      </ReadMoreButton>
      <ArtistSectionCard>
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
          {artist.spotifyList && Object.keys(artist.spotifyList).length > 0 && (
            <SpotifyPlayer spotifyList={artist.spotifyList} mode="desktop" />
          )}
        </ArtistImageContainer>
        <ArtistContentContainer>
          <ArtistName variant="h5" sx={{ textTransform: "uppercase" }}>
            {artist.name}
          </ArtistName>
          <Box>
            {["instagram", "twitter", "facebook", "spotify"].map((social) => (
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
                  {social === "spotify" && <FaSpotify />}
                </SocialIconButton>
              </Link>
            ))}
          </Box>
          <BiographyText>{HTMLReactParser(artist.fullBio)}</BiographyText>
        </ArtistContentContainer>
      </ArtistSectionCard>
      <SpotifyPlayerContainer>
        {artist.spotifyList && Object.keys(artist.spotifyList).length > 0 && (
          <SpotifyPlayer spotifyList={artist.spotifyList} mode="mobile" />
        )}
      </SpotifyPlayerContainer>
      {artist.youtubeList && Object.keys(artist.youtubeList).length > 0 && (
        <YouTubeCarousel youtubeList={artist.youtubeList} />
      )}
    </Box>
  );
};

export default ArtistDetail;
