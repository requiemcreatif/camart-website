import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Cam Art Prods",
  description: "Cam Art Prods official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
