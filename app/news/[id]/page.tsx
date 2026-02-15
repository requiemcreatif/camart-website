import NewsArticleDetail from ".";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <NewsArticleDetail id={id} />;
}
