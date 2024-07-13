import Image from "next/image";

import { Container, Box } from "@mui/material";
import CamHeroImage from "../../public/images/cam95.jpg";
import { Header } from "../Header";
import { HeroContainer, ImageContentCover } from "./styles";

export const CamHero = () => {
  return (
    <HeroContainer
    // sx={{
    //   backgroundImage: `url(${CamHeroImage.src})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    >
      <Header />
      {/* <ImageContentCover /> */}
    </HeroContainer>
  );
};
