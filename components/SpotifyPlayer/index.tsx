import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { PlayArrow, Pause, SkipPrevious, SkipNext } from "@mui/icons-material";
import {
  PlayerWrapper,
  SongContainer,
  ControlsContainer,
  ControlButton,
  SongInfo,
} from "./styles";

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

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : embedUrls.length - 1
    );
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex < embedUrls.length - 1 ? prevIndex + 1 : 0
    );
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

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
      <SongInfo>
        {/* <Typography variant="body2" noWrap>
          Track {currentSongIndex + 1}
        </Typography> */}
      </SongInfo>
      {/* <ControlsContainer>
        <ControlButton onClick={handlePrevious} size="small">
          <SkipPrevious fontSize="small" />
        </ControlButton>
        <ControlButton onClick={togglePlay} size="small">
          {isPlaying ? (
            <Pause fontSize="small" />
          ) : (
            <PlayArrow fontSize="small" />
          )}
        </ControlButton>
        <ControlButton onClick={handleNext} size="small">
          <SkipNext fontSize="small" />
        </ControlButton>
      </ControlsContainer> */}
    </PlayerWrapper>
  );
};

export default SpotifyPlayer;
