import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

// Define the SocialMediaLinks type for social media URLs
type SocialMediaLinks = {
  instagram: string;
  twitter: string;
  facebook: string;
};

// Define the Artist type with expected properties
type Artist = {
  id: string;
  name: string;
  shortBio: string;
  longBio?: string;
  imageUrl: string;
  socialLinks: SocialMediaLinks;
};

// Define the API handler function with explicit types for request and response
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Artist[] | { message: string; error?: string }>
): Promise<void> {
  try {
    // Perform the GET request to fetch artist data, expecting an array of Artist objects
    const response: AxiosResponse<Artist[]> = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/artists`, // Ensure the URL is correct
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // Use the API token from environment variables
        },
      }
    );

    // Send the fetched data as JSON with a 200 OK status
    res.status(200).json(response.data);
  } catch (error: any) {
    // Type the error as any to access the message property
    // Handle errors by sending a 500 status and error details
    res.status(500).json({
      message: "Failed to fetch artists",
      error: error.message || "Unknown error", // Provide a default error message
    });
  }
}
