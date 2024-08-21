// components/SpotifyPlayer/styles.ts

import { styled, Box, IconButton } from "@mui/material";

export const PlayerWrapper = styled(Box)<{ mode: "desktop" | "mobile" }>(
  ({ theme, mode }) => ({
    position: mode === "desktop" ? "absolute" : "relative",
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor:
    //   theme.palette.mode === "dark"
    //     ? "rgba(0, 0, 0, 0.8)"
    //     : "rgba(255, 255, 255, 0.8)",
    borderRadius: "12px ",
    padding: "10px",
    color: theme.palette.text.primary,
    //display: "flex",
    alignItems: "center",
    //justifyContent: "space-between",
    //backdropFilter: "blur(5px)",
    height: mode === "desktop" ? "100px" : "auto",
    zIndex: 1,
    ...(mode === "desktop" && {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    }),
    ...(mode === "mobile" && {
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    }),
  })
);

export const SongContainer = styled(Box)<{ mode: "desktop" | "mobile" }>(
  ({ mode }) => ({
    flex: "1 1 auto",
    height: mode === "desktop" ? "100%" : "80px",
    marginBottom: mode === "mobile" ? "10px" : 0,
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
