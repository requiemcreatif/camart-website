import React from "react";
import { Box, Skeleton } from "@mui/material";
import { ArtistSectionCard } from "../styles";

const ArtistSkeleton: React.FC = () => (
  <ArtistSectionCard>
    <Skeleton variant="rectangular" width="100%" height={200} />
    <Box sx={{ pt: 0.5 }}>
      <Skeleton width="60%" />
      <Skeleton />
      <Skeleton width="80%" />
    </Box>
  </ArtistSectionCard>
);

export default ArtistSkeleton;
