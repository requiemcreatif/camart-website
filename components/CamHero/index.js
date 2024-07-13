//"use client";
import React from "react";
import Image from "next/image";
import { Header } from "../Header";
import { HeroContainer, ImageContentCover } from "./styles";
import CamHeroImage from "../../public/images/cam95.jpg";

export const CamHero = () => {
  console.log(CamHeroImage.src);
  return (
    <HeroContainer>
      <Image
        //src={CamHeroImage}
        src="/images/cam415.jpg"
        alt="Cam Art Hero"
        //fill
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
