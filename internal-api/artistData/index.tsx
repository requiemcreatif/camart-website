// File: hooks/useArtistData.ts

import { use } from "react";

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

async function fetchArtists(): Promise<Artist[]> {
  const res = await fetch("/api/artists");
  if (!res.ok) {
    throw new Error("Failed to fetch artists");
  }
  return res.json();
}

export function useArtistData() {
  return use(fetchArtists());
}
