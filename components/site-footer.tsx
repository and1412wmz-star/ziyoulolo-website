import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="flex items-center justify-between gap-6 py-10">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} ZIYOU &amp; LOLO</p>
        <p className="text-sm text-black/40">A growing world of paintings and stories.</p>
      </Container>
    </footer>
  );
}
