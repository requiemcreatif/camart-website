import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { Artist } from "@/internal-api/artistData";
import { parseImageUrl } from "../../../utils/parseImageUrl";
import {
  ArtistSectionCard,
  ArtistImageContainer,
  ArtistContentContainer,
  ArtistName,
  ReadMoreButton,
  SocialIconButton,
  BiographyText,
} from "../styles";

interface ArtistDetailProps {
  artist: Artist;
  onBackClick: () => void;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onBackClick }) => {
  return (
    <>
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
                  {social === "spotify" && <AudiotrackIcon />}
                </SocialIconButton>
              </Link>
            ))}
          </Box>
          <BiographyText>{HTMLReactParser(artist.fullBio)}</BiographyText>
        </ArtistContentContainer>
      </ArtistSectionCard>
    </>
  );
};

export default ArtistDetail;
