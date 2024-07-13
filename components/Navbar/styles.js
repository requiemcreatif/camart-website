"use client";
import { styled, Typography, Box, Drawer } from "@mui/material";

export const NavWrapper = styled("div")`
  padding: 15px 0;
  background-color: ${({ isscrolled }) =>
    isscrolled === "true" ? "#ffffff" : "#000000"};
  transition: background-color 0.3s ease;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
`;

export const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DesktopMenu = styled("ul")`
  display: none;
  gap: 30px;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled(Box)`
  a {
    color: ${({ isscrolled }) =>
      isscrolled === "true" ? "#000000" : "#ffffff"};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #bbbbbb;
    }
  }
`;

export const NavLogo = styled("div")`
  color: ${({ isscrolled }) => (isscrolled === "true" ? "#000000" : "#ffffff")};
  font-weight: bold;
  transition: color 0.3s ease;
`;

export const MobileMenuIcon = styled(Box)`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 350px;
    background-color: ${({ isscrolled }) =>
      isscrolled === "true" ? "#ffffff" : "#000000"};
    color: ${({ isscrolled }) =>
      isscrolled === "true" ? "#000000" : "#ffffff"};
  }
`;

export const MobileMenuList = styled("ul")`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const MobileMenuItem = styled("li")`
  padding: 15px 20px;
  border-bottom: 1px solid
    ${({ isscrolled }) => (isscrolled === "true" ? "#e0e0e0" : "#333333")};
`;
