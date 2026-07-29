import { createFileRoute } from "@tanstack/react-router";
import { LEADERSHIP } from "@/lib/agf-data";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Asia Global Finansial" },
      { name: "description", content: "Meet the principals of AGF — decades of capital markets, investment banking and corporate experience." },
      { property: "og:title", content: "Leadership — AGF" },
      { property: "og:description", content: "Principals with 25+ years across capital markets and corporate leadership." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <>
      <section className="py-24 border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <span className="eyebrow">Leadership</span>
          <h1 className="hairline mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
            Principals with <span className="italic text-gold">deep operating</span> and capital markets experience.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-24">
          {LEADERSHIP.map((p, i) => (
            <article key={p.name} className="grid md:grid-cols-[220px_1fr] gap-10">
              <div>
                <div className="aspect-square border border-gold/40 bg-card flex items-center justify-center font-display text-6xl text-gold relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
                  <span className="relative">{p.initials}</span>
                </div>
                <div className="mt-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">0{i + 1} · Partner</div>
              </div>
              <div>
                <h2 className="font-display text-4xl">{p.name}</h2>
                <div className="mt-2 text-sm tracking-[0.2em] uppercase text-gold">{p.role}</div>
                <p className="mt-6 text-muted-foreground leading-relaxed text-justify">{p.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}