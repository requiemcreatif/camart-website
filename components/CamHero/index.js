//"use client";
import React from "react";
import Image from "next/image";
import { Header } from "../Header";
import { HeroContainer, ImageContentCover } from "./styles";
import CamHeroImage from "../../public/images/cam95.jpg";

export const CamHero = () => {
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
