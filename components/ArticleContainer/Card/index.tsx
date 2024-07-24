// Card.tsx (updated)
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { formatText } from "@/utils/formatText";
import { CardContainer, ImageBox, CardDescription } from "../styles";

interface CardProps {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  onClick: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  date,
  title,
  excerpt,
  onClick,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    onClick={() => onClick(id)}
  >
    <CardContainer>
      <ImageBox>
        <Image src={image ?? ""} alt={title} layout="fill" objectFit="cover" />
      </ImageBox>
      <CardDescription>
        <Typography variant="caption" color="text.secondary">
          {dayjs(date).format("MMM DD, YYYY")}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#000",
            textTransform: "uppercase",
            lineHeight: 1.2,
            my: 1,
          }}
        >
          {title && formatText(title, 40)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {(excerpt && formatText(excerpt, 90)) || ""}
        </Typography>
      </CardDescription>
    </CardContainer>
  </motion.div>
);

export default Card;
