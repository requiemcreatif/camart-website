import React from "react";
import Navbar from "../Navbar";
import { Footer } from "@/components/Footer";
import { styled } from "@mui/material/styles";

const PageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled("main")`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

interface ArtistPageWrapperProps {
  children: React.ReactNode;
}

const ArtistPageWrapper: React.FC<ArtistPageWrapperProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Navbar
        toggleTheme={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default ArtistPageWrapper;
