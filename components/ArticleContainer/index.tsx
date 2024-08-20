"use client";
import React, { useState } from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";
import PostDetail from "./PostDetail";
import { usePosts } from "@/internal-api/postData";
import { ImageContentWrapper, ImageContainer } from "./styles";

export default function ArticleContainer() {
  const theme = useTheme();
  const { data: posts, isLoading, isError, error } = usePosts();
  const [visibleCards, setVisibleCards] = useState(4);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const loadMore = () => {
    setVisibleCards((prevVisible) =>
      Math.min(prevVisible + 4, posts?.length || 0)
    );
  };

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
  };

  const selectedPost = posts?.find((post) => post.id === selectedPostId);

  return (
    <ImageContentWrapper id="menu-noticias">
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: theme.palette.text.primary, // Ensure correct text color
          }}
        >
          ULTIMAS NOTICIAS
        </Typography>
        {selectedPostId && selectedPost ? (
          <PostDetail post={selectedPost} onBackClick={handleBackToList} />
        ) : (
          <>
            <ImageContainer>
              <AnimatePresence>
                {posts &&
                  posts.slice(0, visibleCards).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        {...post}
                        onClick={() => handlePostClick(post.id)}
                      />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </ImageContainer>
            {visibleCards < (posts?.length || 0) && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={loadMore}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                    }}
                  >
                    Ver Mas
                  </Button>
                </motion.div>
              </Box>
            )}
          </>
        )}
      </Container>
    </ImageContentWrapper>
  );
}
