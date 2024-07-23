// File: internal-api/useArtistData.ts

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define SocialMediaLinks type for social media URLs
type SocialMediaLinks = {
  instagram: string;
  twitter: string;
  facebook: string;
  spotify: string;
};

// Define Artist type with expected properties
export type Artist = {
  id: number;
  name: string;
  content: string;
  shortBio: string;
  fullBio: string;
  imageUrl: string | null;
  social: SocialMediaLinks;
};

const fetchArtists = async (): Promise<Artist[]> => {
  const response = await axios.get(`/api/artists`);
  return response.data;
};

export const fetchArtist = async (id: number): Promise<Artist> => {
  const response = await axios.get(`/api/artists/${id}`);
  return response.data;
};

export const useArtistData = () => {
  return useQuery<Artist[], Error>({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });
};

export const useArtistDetail = (id: number) => {
  return useQuery<Artist, Error>({
    queryKey: ["artists", id],
    queryFn: () => fetchArtist(id),
  });
};
