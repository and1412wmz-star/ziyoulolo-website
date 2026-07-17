import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
};

export default function ExplorePage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <h1 className="sr-only">Explore</h1>
    </section>
  );
}
