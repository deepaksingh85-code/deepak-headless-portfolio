import { unstable_noStore as noStore } from "next/cache";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API!;

export async function fetchAPI(endpoint: string) {
  noStore();

  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}