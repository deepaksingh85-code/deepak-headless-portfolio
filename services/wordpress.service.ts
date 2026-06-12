import { fetchAPI } from "@/lib/wordpress";

export async function getHomePage() {
  return fetchAPI("/pages?slug=home");
}

export async function getPosts() {
  return fetchAPI("/posts");
}

export async function getPortfolio() {
  return fetchAPI("/portfolio");
}