// components/Navbar/styles.ts

import styled from "@emotion/styled";
import { Box, Drawer } from "@mui/material";
import { Theme as MuiTheme } from "@mui/material/styles";

interface ScrolledProps {
  $isScrolled: boolean;
}

export const NavWrapper = styled(Box)<ScrolledProps>(
  ({ theme, $isScrolled }) => ({
    padding: "15px 0",
    backgroundColor: $isScrolled
      ? (theme as MuiTheme).palette.background.paper
      : "transparent",
    transition: "background-color 0.3s ease",
    position: "fixed",
    top: 0,
    zIndex: 100,
    width: "100%",
  })
);

export const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
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

export const NavLink = styled(Box)<ScrolledProps>(({ theme, $isScrolled }) => ({
  a: {
    color: $isScrolled
      ? (theme as MuiTheme).palette.text.primary
      : (theme as MuiTheme).palette.common.white,
    textDecoration: "none",
    transition: "color 0.3s ease",
    "&:hover": {
      color: (theme as MuiTheme).palette.primary.main,
    },
  },
}));

export const NavLogo = styled("div")<ScrolledProps>(
  ({ theme, $isScrolled }) => ({
    color: $isScrolled
      ? (theme as MuiTheme).palette.text.primary
      : (theme as MuiTheme).palette.common.white,
    fontWeight: "bold",
    transition: "color 0.3s ease",
  })
);

export const MobileMenuIcon = styled(Box)`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledDrawer = styled(Drawer)<ScrolledProps>(
  ({ theme, $isScrolled }) => ({
    "& .MuiDrawer-paper": {
      width: "350px",
      backgroundColor: (theme as MuiTheme).palette.background.paper,
      color: (theme as MuiTheme).palette.text.primary,
    },
  })
);

export const MobileMenuList = styled("ul")`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const MobileMenuItem = styled("li")<ScrolledProps>(
  ({ theme, $isScrolled }) => ({
    padding: "15px 20px",
    borderBottom: `1px solid ${(theme as MuiTheme).palette.divider}`,
  })
);
