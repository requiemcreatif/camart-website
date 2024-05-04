import { Box } from "@mui/material";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import ImageContent from "@/components/ImageContent";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box>
        <Header />
      </Box>
      <Box>
        <ImageContent />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}
