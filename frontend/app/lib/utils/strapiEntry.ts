import qs from "qs";
import { API_BASE_URL } from "../config";

export type PopulateOption = "*" | Record<string, unknown>;

const defaultPopulate: PopulateOption = "*";

export function buildStrapiQuery(extra: Record<string, unknown> = {}) {
  return qs.stringify(
    {
      populate: defaultPopulate,
      ...extra,
    },
    { encodeValuesOnly: true },
  );
}

export type FetchBySlugOrIdOptions = {
  idOrSlug: string;
  apiPath: string; // e.g. '/api/recruitments'
  slugField?: string; // e.g. 'slug'
  populate?: PopulateOption;
  extraQuery?: Record<string, unknown>;
};

export type StrapiSingleResponse<T> = { data: T; meta?: unknown };
export type StrapiListResponse<T> = { data: T[]; meta?: unknown };

export async function fetchEntryBySlugOrId<T = unknown>({
  idOrSlug,
  apiPath,
  slugField = "slug",
  populate = defaultPopulate,
  extraQuery = {},
}: FetchBySlugOrIdOptions): Promise<StrapiSingleResponse<T>> {
  const looksNumeric = /^\d+$/.test(idOrSlug);

  // Try slug first when the value does not look like a numeric id
  if (!looksNumeric) {
    const slugQuery = qs.stringify(
      {
        populate,
        filters: {
          [slugField]: { $eq: idOrSlug },
        },
        pagination: { pageSize: 1 },
        ...extraQuery,
      },
      { encodeValuesOnly: true },
    );
    const slugRes = await fetch(`${API_BASE_URL}${apiPath}?${slugQuery}`);
    if (slugRes.ok) {
      const json: StrapiListResponse<T> = await slugRes.json();
      const first = json?.data?.[0];
      if (first) {
        return { data: first, meta: json?.meta };
      }
    }
    // If slug lookup fails, fall through to id
  }

  const idQuery = qs.stringify(
    {
      populate,
      ...extraQuery,
    },
    { encodeValuesOnly: true },
  );
  const idRes = await fetch(`${API_BASE_URL}${apiPath}/${idOrSlug}?${idQuery}`);
  if (!idRes.ok) {
    throw new Response("Entry not found", { status: idRes.status });
  }
  const idJson: StrapiSingleResponse<T> = await idRes.json();
  return idJson;
}
