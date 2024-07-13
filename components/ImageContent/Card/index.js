import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { CardContainer, ImageBox, CardDescription } from "../styles";

const Card = ({ image, date, title, description }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <CardContainer>
      <ImageBox>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </ImageBox>
      <Link href="#" passHref>
        <CardDescription>
          <Typography variant="caption" color="text.secondary">
            {date}
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
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardDescription>
      </Link>
    </CardContainer>
  </motion.div>
);

export default Card;
