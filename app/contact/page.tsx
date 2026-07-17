import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-24">
      <h1 className="sr-only">Contact</h1>
    </section>
  );
}
