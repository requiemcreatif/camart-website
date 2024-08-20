// components/Navbar/index.tsx

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Container, Typography, IconButton, useTheme } from "@mui/material";
import ThemeToggle from "../ThemeToggleProps";
import { useThemeToggle } from "../ThemeContext";
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

interface MenuItem {
  id: string;
  label: string;
}

export const Navbar: React.FC = () => {
  const toggleTheme = useThemeToggle();
  console.log("Navbar rendered, toggleTheme:", toggleTheme);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  };

  const menuItems: MenuItem[] = [
    { id: "menu-home", label: "Home" },
    { id: "menu-about", label: "Artistas" },
    { id: "menu-noticias", label: "Noticias" },
    { id: "menu-contacto", label: "Contacto" },
  ];

  const iconColor = isScrolled ? theme.palette.text.primary : "#ffffff";

  const handleThemeToggle = () => {
    console.log("Theme toggle clicked in Navbar");
    toggleTheme();
  };

  return (
    <NavWrapper $isScrolled={isScrolled}>
      <Container>
        <NavbarContainer>
          <Link href="/">
            <NavLogo $isScrolled={isScrolled}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                CamART
              </Typography>
            </NavLogo>
          </Link>
          <DesktopMenu>
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink $isScrolled={isScrolled}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                  >
                    {item.label}
                  </Link>
                </NavLink>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
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
        $isScrolled={isScrolled}
      >
        <IconButton
          sx={{ alignSelf: "flex-end", margin: "10px" }}
          onClick={toggleMobileMenu}
        >
          <CloseIcon sx={{ color: iconColor }} />
        </IconButton>
        <MobileMenuList>
          {menuItems.map((item) => (
            <MobileMenuItem key={item.id} $isScrolled={isScrolled}>
              <Link
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.label}
              </Link>
            </MobileMenuItem>
          ))}
          <MobileMenuItem $isScrolled={isScrolled}>
            <ThemeToggle />
          </MobileMenuItem>
        </MobileMenuList>
      </StyledDrawer>
    </NavWrapper>
  );
};

export default Navbar;
