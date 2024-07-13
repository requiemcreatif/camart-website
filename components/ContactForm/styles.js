"use client";
import { styled, Container, Box, TextField, Checkbox } from "@mui/material";

export const ContactFormWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  color: #9f9fa4;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px 0;
  }
`;

export const ContactTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #9f9fa4;
    }
    &:hover fieldset {
      border-color: #bdbdbd;
    }
    &.Mui-focused fieldset {
      border-color: #1976d2;
    }
  }
  & .MuiInputLabel-root {
    color: #9f9fa4;
  }
  & .MuiInputBase-input {
    color: #ffffff;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  color: #9f9fa4;
  &.Mui-checked {
    color: #1976d2;
  }
`;

export const FormContainer = styled(Box)`
  background-color: #131313;
  padding: 40px 0;
  color: #9f9fa4;
`;
