"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Typography, IconButton } from "@mui/material";
import {
  NavWrapper,
  NavbarContainer,
  DesktopMenu,
  NavLink,
  NavLogo,
  MobileMenuIcon,
  StyledDrawer,
  MobileMenuList,
  MobileMenuItem,
} from "./styles";
//import CamartLogo from "../../public/images/cam_art_logo_white.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = ["Home", "About", "Media", "Contact"];
  const iconColor = isScrolled ? "#000000" : "#ffffff";

  return (
    <NavWrapper isScrolled={isScrolled}>
      <Container>
        <NavbarContainer>
          <NavLogo isScrolled={isScrolled}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              CamART
            </Typography>
          </NavLogo>
          <DesktopMenu>
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink isScrolled={isScrolled}>
                  <Link href="#">{item}</Link>
                </NavLink>
              </li>
            ))}
          </DesktopMenu>
          <MobileMenuIcon>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMobileMenu}
              sx={{ color: iconColor }}
            >
              <MenuIcon />
            </IconButton>
          </MobileMenuIcon>
        </NavbarContainer>
      </Container>

      <StyledDrawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        isScrolled={isScrolled}
      >
        <IconButton
          sx={{ alignSelf: "flex-end", margin: "10px" }}
          onClick={toggleMobileMenu}
        >
          <CloseIcon sx={{ color: iconColor }} />
        </IconButton>
        <MobileMenuList>
          {menuItems.map((item) => (
            <MobileMenuItem key={item} isScrolled={isScrolled}>
              <Link href="#" onClick={toggleMobileMenu}>
                {item}
              </Link>
            </MobileMenuItem>
          ))}
        </MobileMenuList>
      </StyledDrawer>
    </NavWrapper>
  );
};

export default Navbar;
