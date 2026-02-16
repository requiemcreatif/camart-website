import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { PlayerWrapper, SongContainer, SongInfo } from "./styles";

interface SpotifyList {
  [key: string]: string;
}

interface SpotifyPlayerProps {
  spotifyList: SpotifyList;
  mode: "desktop" | "mobile";
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ spotifyList, mode }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedUrls, setEmbedUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = Object.values(spotifyList).map((iframeString) => {
      const match = iframeString.match(/src="([^"]+)"/);
      return match ? match[1] : "";
    });
    setEmbedUrls(urls);
  }, [spotifyList]);

  if (embedUrls.length === 0) {
    return null;
  }

  return (
    <PlayerWrapper mode={mode}>
      <SongContainer mode={mode}>
        <Box
          component="iframe"
          src={embedUrls[currentSongIndex]}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="encrypted-media"
          sx={{ borderRadius: "12px" }}
        />
      </SongContainer>
      <SongInfo></SongInfo>
    </PlayerWrapper>
  );
};

export default SpotifyPlayer;
