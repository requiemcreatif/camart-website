"use client";
import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";
import { usePosts } from "@/internal-api/postData";
import { ImageContentWrapper, ImageContainer } from "./styles";

export default function ArticleContainer() {
  const { data: cardData, isLoading, isError, error } = usePosts();
  console.log("posts", cardData);
  const [visibleCards, setVisibleCards] = useState(4);

  const loadMore = () => {
    setVisibleCards((prevVisible) =>
      Math.min(prevVisible + 4, cardData.length)
    );
  };

  return (
    <ImageContentWrapper id="menu-noticias">
      <Container
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
          ULTIMAS NOTICIAS
        </Typography>
        <ImageContainer>
          <AnimatePresence>
            {cardData &&
              cardData?.slice(0, visibleCards).map((card, index) => (
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
        {visibleCards < cardData?.length && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={loadMore}
                sx={{ backgroundColor: "#40679e", color: "#fff" }}
              >
                Ver Mas
              </Button>
            </motion.div>
          </Box>
        )}
      </Container>
    </ImageContentWrapper>
  );
}
