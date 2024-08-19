import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { CarouselWrapper, VideoContainer, NavigationButton } from "./styles";

interface YouTubeList {
  [key: string]: string;
}

interface YouTubeCarouselProps {
  youtubeList: YouTubeList;
}

const YouTubeCarousel: React.FC<YouTubeCarouselProps> = ({ youtubeList }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [embedUrls, setEmbedUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = Object.values(youtubeList).map((iframeString) => {
      const match = iframeString.match(/src="([^"]+)"/);
      return match ? match[1] : "";
    });
    setEmbedUrls(urls);
  }, [youtubeList]);

  const handlePrevious = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : embedUrls.length - 1
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < embedUrls.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (embedUrls.length === 0) {
    return null;
  }

  return (
    <CarouselWrapper>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <NavigationButton onClick={handlePrevious}>
          <ChevronLeft />
        </NavigationButton>
        <VideoContainer>
          <Box
            component="iframe"
            src={embedUrls[currentVideoIndex]}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </VideoContainer>
        <NavigationButton onClick={handleNext}>
          <ChevronRight />
        </NavigationButton>
      </Box>
    </CarouselWrapper>
  );
};

export default YouTubeCarousel;
