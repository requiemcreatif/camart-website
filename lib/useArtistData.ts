// File: lib/useArtistData.ts

import axios from "axios";

export type Artist = {
  id: string;
  name: string;
  shortBio: string;
  longBio?: string;
  imageUrl: string;
  social: {
    instagram: string;
    twitter: string;
    facebook: string;
  };
};

export async function getArtistsData(): Promise<Artist[]> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/artists`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching artists:", error);
    throw new Error("Failed to fetch artists");
  }
}
