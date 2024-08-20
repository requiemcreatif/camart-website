import React, { useState } from "react";
import { Box, Grow } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Artist } from "@/internal-api/artistData";
import { parseImageUrl } from "../../../utils/parseImageUrl";
import { formatText } from "@/utils/formatText";
import {
  ArtistSectionCard,
  ArtistImageContainer,
  ArtistContentContainer,
  ArtistName,
  ArtistDescription,
  ActionContainer,
  ReadMoreButton,
  SocialIconButton,
} from "../styles";
import ArtistSkeleton from "../ArtistSkeleton";

interface ArtistListProps {
  artists: Artist[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  onArtistClick: (artistId: number) => void;
}

const ArtistList: React.FC<ArtistListProps> = ({
  artists,
  isLoading,
  isError,
  error,
  onArtistClick,
}) => {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);

  if (isLoading) {
    return (
      <>
        <ArtistSkeleton />
        <ArtistSkeleton />
      </>
    );
  }

  if (isError) {
    return <div>Error fetching artists: {error?.message}</div>;
  }

  if (!artists || artists.length === 0) {
    return <div>No artists found</div>;
  }

  return (
    <>
      {artists.map((artist: Artist) => (
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
                {formatText(artist.shortBio, 130)}
              </ArtistDescription>
              <ActionContainer>
                <ReadMoreButton
                  onClick={() => onArtistClick(artist.id)}
                  variant="contained"
                >
                  Leer más
                </ReadMoreButton>
                <Box>
                  {["instagram", "twitter", "facebook"].map((social, index) => (
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
                    </Grow>
                  ))}
                </Box>
              </ActionContainer>
            </ArtistContentContainer>
          </ArtistSectionCard>
        </motion.div>
      ))}
    </>
  );
};

export default ArtistList;
