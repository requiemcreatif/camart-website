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

const fetchArtists = async (): Promise<Artist[]> => {
  const response = await axios.get(`${API_BASE_URL}/artists`);
  return response.data;
};

export const useArtistData = () => {
  return useQuery<Artist[], Error>({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });
};
