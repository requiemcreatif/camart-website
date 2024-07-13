"use client";
import { styled, Container, Box } from "@mui/material";

export const HeaderWrapper = styled("div")`
  //background-color: #000;
  background-color: #cf2e2e;
  color: #fff;
  padding: 50px 0;
`;
export const HeaderContainer = styled(Container)`
  color: #fff;
  padding: 50px 0;
  height: auto;
`;
export const ImageContainer = styled(Box)`
  padding: 10px;
  max-width: 400px;
  margin: 0 auto;

  img {
    justify-self: center;
    align-items: center;
  }
`;

export const CamartTitle = styled("h2")`
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const CamartIntroText = styled("p")`
  font-size: 0.9rem;
  text-align: center;
  font-weight: 300;
  padding: 20px 0;
`;
export const CamartIntro = styled("h4")`
  font-size: 1.1rem;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  padding: 20px 0;
`;
export const HeaderButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
`;
export const HeaderButton = styled("button")`
  border: #d91414 1px solid;
  border-radius: 25px;
  color: #d91414;
  //color: #fff;
  padding: 10px 25px;
  font-size: 1rem;
  font-weight: 500;
  //text-transform: uppercase;
  cursor: pointer;
`;
