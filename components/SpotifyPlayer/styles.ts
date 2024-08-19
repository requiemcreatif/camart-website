import { styled, Box, IconButton } from "@mui/material";

export const PlayerWrapper = styled(Box)<{ mode: "desktop" | "mobile" }>(
  ({ theme, mode }) => ({
    backgroundColor: "rgba(19, 19, 19, 0.8)",
    borderRadius: "12px 12px 0 0",
    padding: "10px",
    color: "#fff",
    backdropFilter: "blur(5px)",
    zIndex: 1,
    ...(mode === "desktop" && {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100px",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    }),
    ...(mode === "mobile" && {
      display: "flex",
      flexDirection: "column",
      height: "auto",
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
  color: "#fff",
  padding: "8px",
}));
