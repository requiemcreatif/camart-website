import Image from "next/image";
import { Box, Container, Button } from "@mui/material";
import { ImageContentWrapper, ImageContainer, ImageBox } from "./styles";

export default function ImageContent() {
  return (
    <ImageContentWrapper>
      <ImageContainer>
        <ImageBox>
          <Image
            src="/images/cam204.jpg"
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </ImageBox>
        <ImageBox>
          <Image
            src="/images/cam95.jpg"
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </ImageBox>
        <ImageBox>
          <Image
            src="/images/cam459.jpg"
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </ImageBox>
        <ImageBox>
          <Image
            src="/images/cam415.jpg"
            alt="Picture of the author"
            width={800}
            height={800}
          />
        </ImageBox>
      </ImageContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Button variant="contained" color="primary">
          View More
        </Button>
      </Box>
    </ImageContentWrapper>
  );
}
