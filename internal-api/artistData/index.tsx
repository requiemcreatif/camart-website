import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define the SocialMediaLinks type for social media URLs
type SocialMediaLinks = {
  instagram: string;
  twitter: string;
  facebook: string;
  spotify: string;
};

// Define the Artist type with expected properties
export type Artist = {
  id: number;
  name: string;
  content: string;
  shortBio: string;
  fullBio: string;
  imageUrl: string | null;
  social: SocialMediaLinks;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const fetchArtists = async (): Promise<Artist[]> => {
  if (!API_BASE_URL && !BACKEND_URL) {
    console.error("API_BASE_URL and BACKEND_URL are not set");
    throw new Error("API URL is not configured");
  }

  const url = `${API_BASE_URL || BACKEND_URL}/artists`;
  console.log("Fetching artists from:", url);

  try {
    const response = await axios.get(url);
    console.log("Artists data received:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw error;
  }
};

export const useArtistData = () => {
  return useQuery<Artist[], Error>({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });
};
