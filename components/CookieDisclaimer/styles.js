"use client";
import { styled, Box } from "@mui/material";

export const CookieContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  color: #000;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 10;
`;
