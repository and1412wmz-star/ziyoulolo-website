import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <h1 className="sr-only">News</h1>
    </section>
  );
}
