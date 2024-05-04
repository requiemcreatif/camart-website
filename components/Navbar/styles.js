"use client";
import { styled, Container } from "@mui/material";

export const NavWrapper = styled("div")`
  display: none;
  padding: 10px 0;
  background-color: #000;

  @media (min-width: 768px) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
  }
`;

export const NavbarContainer = styled("nav")`
  background-color: #000;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  ul {
    color: #fff;
    display: flex;
    gap: 20px;
    padding: 0;
    list-style: none;
  }
`;
