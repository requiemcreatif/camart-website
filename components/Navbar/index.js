import Link from "next/link";
import { Container, Typography } from "@mui/material";
import { NavWrapper, NavbarContainer } from "./styles";

export const Navbar = () => {
  return (
    <NavWrapper>
      <Container>
        <NavbarContainer>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Media</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </NavbarContainer>
      </Container>
    </NavWrapper>
  );
};
