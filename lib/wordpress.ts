const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API!;

export async function fetchAPI(endpoint: string) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}