import { Container, Typography } from "@mui/material";
import { CamartTitle, CamartIntroText } from "./styles";

export const Header = () => {
  return (
    <Container>
      <CamartTitle variant="h2">Cam Art</CamartTitle>
      <CamartIntroText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </CamartIntroText>
    </Container>
  );
};
