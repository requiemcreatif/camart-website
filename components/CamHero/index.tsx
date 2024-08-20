//components/CamHero/index.js
import React from "react";
import Image from "next/image";
import { Header } from "../Header";
import { HeroContainer, ImageContentCover } from "./styles";

export const CamHero: React.FC = () => {
  return (
    <HeroContainer>
      <Image
        src="/images/cam415.jpg"
        alt="Cam Art Hero"
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
      <ImageContentCover>
        <Header />
      </ImageContentCover>
    </HeroContainer>
  );
};
