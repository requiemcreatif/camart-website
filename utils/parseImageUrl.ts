export function parseImageUrl(url: string | null | undefined): string | null {
  if (!url) return null;

  // Check if this is a Next.js optimized URL
  const nextImageUrlRegex = /\/_next\/image\?url=(.*?)&.*/;
  const match = url.match(nextImageUrlRegex);

  if (match && match[1]) {
    // Decode the URL
    return decodeURIComponent(match[1]);
  }

  // If no match found, return the original URL
  return url;
}
