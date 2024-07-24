import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import dayjs from "dayjs";
import HTMLReactParser from "html-react-parser";
import {
  CardContainer,
  ImageBox,
  CardDescription,
  ButtonContainer,
} from "../styles";

interface PostDetailProps {
  post: {
    id: number;
    title: string;
    image: string;
    date: string;
    postContent: string;
  };
  onBackClick: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onBackClick }) => {
  return (
    <CardContainer>
      <ButtonContainer>
        <Button onClick={onBackClick} variant="contained" sx={{ mb: 2 }}>
          Volver a la lista
        </Button>
      </ButtonContainer>
      <ImageBox>
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </ImageBox>
      <CardDescription>
        <Typography variant="caption" color="text.secondary">
          {dayjs(post.date).format("MMM DD, YYYY")}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#000",
            textTransform: "uppercase",
            lineHeight: 1.2,
            my: 1,
          }}
        >
          {post.title}
        </Typography>
        <Box sx={{ mt: 2 }}>{HTMLReactParser(post.postContent)}</Box>
      </CardDescription>
    </CardContainer>
  );
};

export default PostDetail;
