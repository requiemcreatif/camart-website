import { Box } from "@mui/material";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box>
        <Header />
      </Box>
    </main>
  );
}
