"use client";
import React, { useState } from "react";
import { Container } from "@mui/material";
import ArtistDetail from "./ArtistDetail";
import ArtistList from "./ArtistList";
import { useArtistData, useArtistDetail } from "@/internal-api/artistData";
import { ArtistSectionWrapper, ArtistSectionTitle } from "./styles";

const ArtistSection: React.FC = () => {
  const [selectedArtistId, setSelectedArtistId] = useState<number | null>(null);
  const { data: artists, isLoading, isError, error } = useArtistData();
  const { data: selectedArtist } = useArtistDetail(selectedArtistId);

  const handleArtistClick = (artistId: number) => {
    setSelectedArtistId(artistId);
  };

  const handleBackToList = () => {
    setSelectedArtistId(null);
  };

  return (
    <ArtistSectionWrapper id="menu-about">
      <Container sx={{ mt: 3 }}>
        {selectedArtistId && selectedArtist ? (
          <ArtistDetail
            artist={selectedArtist}
            onBackClick={handleBackToList}
          />
        ) : (
          <>
            <ArtistSectionTitle variant="h4">
              ARTISTAS CAMART
            </ArtistSectionTitle>
            <ArtistList
              artists={artists}
              isLoading={isLoading}
              isError={isError}
              error={error}
              onArtistClick={handleArtistClick}
            />
          </>
        )}
      </Container>
    </ArtistSectionWrapper>
  );
};

export default ArtistSection;
