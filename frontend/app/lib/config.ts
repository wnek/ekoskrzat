export const API_BASE_URL: string = (() => {
  const fromEnv = import.meta.env?.VITE_API_BASE_URL as string | undefined;
  const normalized = (fromEnv || "http://localhost:1337").replace(/\/$/, "");
  return normalized;
})();

export function buildApiUrl(path: string): string {
  if (!path) return API_BASE_URL;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("//")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

