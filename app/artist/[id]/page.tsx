// app/api/artist/[id].ts

import ArtistDetail from ".";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ArtistDetail id={id} />;
}
