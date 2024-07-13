import Image from "next/image";
import Link from "next/link";
import { Box, Container, Button, Typography } from "@mui/material";
import {
  ImageContentWrapper,
  ImageContainer,
  ImageBox,
  CardDescription,
  CardContainer,
} from "./styles";

export default function ImageContent() {
  return (
    <ImageContentWrapper>
      <ImageContainer>
        <CardContainer>
          <ImageBox>
            <Image
              src="/images/cam204.jpg"
              alt="Picture of the author"
              width={800}
              height={800}
            />
          </ImageBox>
          <Link href="#">
            <CardDescription>
              <Typography
                sx={{
                  padding: "5px 0 5px",
                }}
              >
                Jul 20, 2024
              </Typography>
              <Typography
                variant="span"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  fontSize: "1.3rem",
                  textTransform: "uppercase",
                  lineHeight: "1",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
              <Typography
                sx={{
                  padding: "0 5px 0 0",
                  fontSize: ".9rem",
                }}
              >
                En Cam Art Booking, tenemos actualmente a varios artistas del
                mundo...
              </Typography>
            </CardDescription>
          </Link>
        </CardContainer>
        <CardContainer>
          <ImageBox>
            <Image
              src="/images/cam95.jpg"
              alt="Picture of the author"
              width={800}
              height={800}
            />
          </ImageBox>
          <Link href="#">
            <CardDescription>
              <Typography
                sx={{
                  padding: "5px 0 5px",
                }}
              >
                Jul 20, 2024
              </Typography>
              <Typography
                variant="span"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  fontSize: "1.3rem",
                  textTransform: "uppercase",
                  lineHeight: "1",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
              <Typography
                sx={{
                  padding: "0 5px 0 0",
                  fontSize: ".9rem",
                }}
              >
                En Cam Art Booking, tenemos actualmente a varios artistas del
                mundo...
              </Typography>
            </CardDescription>
          </Link>
        </CardContainer>
        <CardContainer>
          <ImageBox>
            <Image
              src="/images/cam459.jpg"
              alt="Picture of the author"
              width={800}
              height={800}
            />
          </ImageBox>
          <Link href="#">
            <CardDescription>
              <Typography
                sx={{
                  padding: "5px 0 5px",
                }}
              >
                Jul 20, 2024
              </Typography>
              <Typography
                variant="span"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  fontSize: "1.3rem",
                  textTransform: "uppercase",
                  lineHeight: "1",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
              <Typography
                sx={{
                  padding: "0 5px 0 0",
                  fontSize: ".9rem",
                }}
              >
                En Cam Art Booking, tenemos actualmente a varios artistas del
                mundo...
              </Typography>
            </CardDescription>
          </Link>
        </CardContainer>
        <CardContainer>
          <ImageBox>
            <Image
              src="/images/cam415.jpg"
              alt="Picture of the author"
              width={800}
              height={800}
            />
          </ImageBox>
          <Link href="#">
            <CardDescription>
              <Typography
                sx={{
                  padding: "5px 0 5px",
                }}
              >
                Jul 20, 2024
              </Typography>
              <Typography
                variant="span"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                  fontSize: "1.3rem",
                  textTransform: "uppercase",
                  lineHeight: "1",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur.
              </Typography>
              <Typography
                sx={{
                  padding: "0 5px 0 0",
                  fontSize: ".9rem",
                }}
              >
                En Cam Art Booking, tenemos actualmente a varios artistas del
                mundo...
              </Typography>
            </CardDescription>
          </Link>
        </CardContainer>
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
