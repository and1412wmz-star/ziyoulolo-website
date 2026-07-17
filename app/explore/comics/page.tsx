import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comics",
};

export default function ComicsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <h1 className="sr-only">Comics</h1>
    </section>
  );
}
