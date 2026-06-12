import { fetchAPI } from "@/lib/wordpress";

export default async function Home() {
  const services = await fetchAPI("/service");

  return (
    <div style={{ padding: 40 }}>
      <h1>Connected Successfully 🚀</h1>

      <pre>{JSON.stringify(services, null, 2)}</pre>
    </div>
  );
}