import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Define SocialMediaLinks type for social media URLs
type SocialMediaLinks = {
  instagram: string;
  twitter: string;
  facebook: string;
  spotify: string;
};

// Define SpotifyList type
type SpotifyList = {
  [key: string]: string;
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
  spotifyList: SpotifyList; // Add spotifyList property to Artist type
  youtubeList: { [key: string]: string }; // Add youtubeList property to Artist type
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

export const useArtistDetail = (id: number | null) => {
  return useQuery<Artist, Error>({
    queryKey: ["artists", id],
    queryFn: () => (id ? fetchArtist(id) : Promise.resolve(null)),
    enabled: id !== null,
  });
};
