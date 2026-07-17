import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story",
};

export default function StoryPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <h1 className="sr-only">Story</h1>
    </section>
  );
}
