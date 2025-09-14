export type StrapiSeo = {
  metaTitle?: string | null;
  metaDescription?: string | null;
  index?: boolean | null;
  follow?: boolean | null;
};

export type MetaDescriptor =
  | { title: string }
  | { name: string; content: string };

function buildRobotsValue(
  indexValue: boolean | null | undefined,
  followValue: boolean | null | undefined,
  fallback: string
): string {
  const hasIndex = typeof indexValue === "boolean";
  const hasFollow = typeof followValue === "boolean";

  if (!hasIndex && !hasFollow) {
    return fallback;
  }

  const indexPart = hasIndex ? (indexValue ? "index" : "no-index") : "index";
  const followPart = hasFollow ? (followValue ? "follow" : "no-follow") : "follow";

  return `${indexPart}, ${followPart}`;
}

export function buildMetaFromSeo(
  seo: StrapiSeo | null | undefined,
  options: {
    fallbackTitle: string;
    fallbackDescription: string;
    fallbackRobots?: string;
  }
): MetaDescriptor[] {
  const fallbackRobots = options.fallbackRobots ?? "index, follow";

  const title = (seo?.metaTitle ?? "").trim() || options.fallbackTitle;
  const description = (seo?.metaDescription ?? "").trim() || options.fallbackDescription;
  const robots = buildRobotsValue(seo?.index, seo?.follow, fallbackRobots);

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: robots },
  ];
}
