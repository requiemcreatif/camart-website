import Image from "next/image";
import { Container, Box } from "@mui/material";
import CamartLogo from "../../public/images/cam_art_logo_white.png";
import {
  HeaderWrapper,
  CamartTitle,
  CamartIntroText,
  CamartIntro,
  HeaderContainer,
  ImageContainer,
  HeaderButtonContainer,
  HeaderButton,
} from "./styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ImageContainer>
          <Image
            src={CamartLogo}
            alt="Cam Art Logo"
            width={250}
            height={200}
            layout="responsive"
          />
        </ImageContainer>
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <CamartIntro>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CamartIntro>
          <CamartIntroText>
            En Cam Art Booking, tenemos actualmente a varios artistas del mundo
            del Hip-hop/Reggae. Os dejamos sus distintos apartados
            profesionales, donde podréis ver su trayectoria y saber más sobre
            ellos y su música. Nuestro equipo estará encantado de resolver
            vuestras dudas y preguntas. Contratando un artista Cam Art, estarás
            impulsando un movimiento,la cultura y un espectáculo digno de ver
            cómo es "Cam Art Festival" ¿Quieres a algún artista de nuestra
            agenda? Contáctanos.
          </CamartIntroText>
        </Box>
        <HeaderButtonContainer>
          <HeaderButton>Contáctanos</HeaderButton>
        </HeaderButtonContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
