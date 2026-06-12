import { fetchAPI } from "@/lib/wordpress";

export default async function Home() {
  const home = await fetchAPI("/pages?slug=home");

  return (
    <div style={{ padding: "50px" }}>
      <h1>Connected Successfully 🚀</h1>

      <pre>{JSON.stringify(home, null, 2)}</pre>
    </div>
  );
}