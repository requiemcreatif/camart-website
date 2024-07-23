import ArtistDetail from ".";

export default function ArtistPage({ params }: { params: { id: string } }) {
  return <ArtistDetail id={params.id} />;
}
