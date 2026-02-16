// components/SpotifyPlayer/styles.ts

import { styled, Box, IconButton } from "@mui/material";

export const PlayerWrapper = styled(Box)<{ mode: "desktop" | "mobile" }>(
  ({ theme, mode }) => ({
    position: "relative",
    width: "100%",
    borderRadius: "0",
    padding: 0,
    color: theme.palette.text.primary,
    alignItems: "center",
    height: mode === "desktop" ? "152px" : "80px",
    zIndex: 1,
  })
);

export const SongContainer = styled(Box)<{ mode: "desktop" | "mobile" }>(
  ({ mode }) => ({
    flex: "1 1 auto",
    height: mode === "desktop" ? "100%" : "80px",
    marginBottom: 0,
  })
);

export const SongInfo = styled(Box)({
  flex: "0 1 auto",
  marginRight: "10px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  textAlign: "center",
});

export const ControlsContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
});

export const ControlButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "8px",
}));
