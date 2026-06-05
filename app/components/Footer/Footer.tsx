export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>
          © {new Date().getFullYear()} Deepak Kumar Singh.
          All Rights Reserved.
        </p>

        <p className="mt-2 text-sm">
          WordPress • Shopify • React • Next.js • AWS Architect •  Headless Commerce Expert
        </p>
      </div>
    </footer>
  );
}