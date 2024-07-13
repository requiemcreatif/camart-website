// import Image from "next/image";
// import Link from "next/link";
// import { Box, Container, Button, Typography } from "@mui/material";
// import {
//   ImageContentWrapper,
//   ImageContainer,
//   ImageBox,
//   CardDescription,
//   CardContainer,
// } from "./styles";

// export default function ImageContent() {
//   return (
//     <ImageContentWrapper>
//       <ImageContainer>
//         <CardContainer>
//           <ImageBox>
//             <Image
//               src="/images/cam204.jpg"
//               alt="Picture of the author"
//               width={800}
//               height={800}
//             />
//           </ImageBox>
//           <Link href="#">
//             <CardDescription>
//               <Typography
//                 sx={{
//                   padding: "5px 0 5px",
//                 }}
//               >
//                 Jul 20, 2024
//               </Typography>
//               <Typography
//                 variant="span"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#000",
//                   fontSize: "1.3rem",
//                   textTransform: "uppercase",
//                   lineHeight: "1",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur.
//               </Typography>
//               <Typography
//                 sx={{
//                   padding: "0 5px 0 0",
//                   fontSize: ".9rem",
//                 }}
//               >
//                 En Cam Art Booking, tenemos actualmente a varios artistas del
//                 mundo...
//               </Typography>
//             </CardDescription>
//           </Link>
//         </CardContainer>
//         <CardContainer>
//           <ImageBox>
//             <Image
//               src="/images/cam95.jpg"
//               alt="Picture of the author"
//               width={800}
//               height={800}
//             />
//           </ImageBox>
//           <Link href="#">
//             <CardDescription>
//               <Typography
//                 sx={{
//                   padding: "5px 0 5px",
//                 }}
//               >
//                 Jul 20, 2024
//               </Typography>
//               <Typography
//                 variant="span"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#000",
//                   fontSize: "1.3rem",
//                   textTransform: "uppercase",
//                   lineHeight: "1",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur.
//               </Typography>
//               <Typography
//                 sx={{
//                   padding: "0 5px 0 0",
//                   fontSize: ".9rem",
//                 }}
//               >
//                 En Cam Art Booking, tenemos actualmente a varios artistas del
//                 mundo...
//               </Typography>
//             </CardDescription>
//           </Link>
//         </CardContainer>
//         <CardContainer>
//           <ImageBox>
//             <Image
//               src="/images/cam459.jpg"
//               alt="Picture of the author"
//               width={800}
//               height={800}
//             />
//           </ImageBox>
//           <Link href="#">
//             <CardDescription>
//               <Typography
//                 sx={{
//                   padding: "5px 0 5px",
//                 }}
//               >
//                 Jul 20, 2024
//               </Typography>
//               <Typography
//                 variant="span"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#000",
//                   fontSize: "1.3rem",
//                   textTransform: "uppercase",
//                   lineHeight: "1",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur.
//               </Typography>
//               <Typography
//                 sx={{
//                   padding: "0 5px 0 0",
//                   fontSize: ".9rem",
//                 }}
//               >
//                 En Cam Art Booking, tenemos actualmente a varios artistas del
//                 mundo...
//               </Typography>
//             </CardDescription>
//           </Link>
//         </CardContainer>
//         <CardContainer>
//           <ImageBox>
//             <Image
//               src="/images/cam415.jpg"
//               alt="Picture of the author"
//               width={800}
//               height={800}
//             />
//           </ImageBox>
//           <Link href="#">
//             <CardDescription>
//               <Typography
//                 sx={{
//                   padding: "5px 0 5px",
//                 }}
//               >
//                 Jul 20, 2024
//               </Typography>
//               <Typography
//                 variant="span"
//                 sx={{
//                   fontWeight: 700,
//                   color: "#000",
//                   fontSize: "1.3rem",
//                   textTransform: "uppercase",
//                   lineHeight: "1",
//                 }}
//               >
//                 Lorem ipsum dolor sit amet, consectetur.
//               </Typography>
//               <Typography
//                 sx={{
//                   padding: "0 5px 0 0",
//                   fontSize: ".9rem",
//                 }}
//               >
//                 En Cam Art Booking, tenemos actualmente a varios artistas del
//                 mundo...
//               </Typography>
//             </CardDescription>
//           </Link>
//         </CardContainer>
//       </ImageContainer>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           padding: "20px",
//         }}
//       >
//         <Button variant="contained" color="primary">
//           View More
//         </Button>
//       </Box>
//     </ImageContentWrapper>
//   );
// }
"use client";
import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";
import { ImageContentWrapper, ImageContainer } from "./styles";

const cardData = [
  {
    id: 1,
    image: "/images/cam204.jpg",
    date: "Jul 20, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    description:
      "En Cam Art Booking, tenemos actualmente a varios artistas del mundo...",
  },
  {
    id: 2,
    image: "/images/cam95.jpg",
    date: "Jul 20, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    description:
      "En Cam Art Booking, tenemos actualmente a varios artistas del mundo...",
  },
  {
    id: 3,
    image: "/images/cam459.jpg",
    date: "Jul 20, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    description:
      "En Cam Art Booking, tenemos actualmente a varios artistas del mundo...",
  },
  {
    id: 4,
    image: "/images/cam415.jpg",
    date: "Jul 20, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    description:
      "En Cam Art Booking, tenemos actualmente a varios artistas del mundo...",
  },
  {
    id: 5,
    image: "/images/cam204.jpg",
    date: "Jul 20, 2024",
    title: "Lorem ipsum dolor sit amet, consectetur.",
    description:
      "En Cam Art Booking, tenemos actualmente a varios artistas del mundo...",
  },
  // ... Add data for other cards
];

export default function ImageContent() {
  const [visibleCards, setVisibleCards] = useState(3);

  const loadMore = () => {
    setVisibleCards((prevVisible) =>
      Math.min(prevVisible + 4, cardData.length)
    );
  };

  return (
    <ImageContentWrapper>
      <Container /*maxWidth="xl"*/>
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Ultimas Noticias
        </Typography>
        <ImageContainer>
          <AnimatePresence>
            {cardData.slice(0, visibleCards).map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card {...card} />
              </motion.div>
            ))}
          </AnimatePresence>
        </ImageContainer>
        {visibleCards < cardData.length && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" color="primary" onClick={loadMore}>
                Ver Mas
              </Button>
            </motion.div>
          </Box>
        )}
      </Container>
    </ImageContentWrapper>
  );
}
