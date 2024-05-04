import { Container, Box } from "@mui/material";
import {
  HeaderWrapper,
  CamartTitle,
  CamartIntroText,
  HeaderContainer,
} from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Box
          sx={{
            padding: "10px",
          }}
        >
          <CamartTitle variant="h2">Cam Art</CamartTitle>
        </Box>
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <CamartIntroText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CamartIntroText>
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
