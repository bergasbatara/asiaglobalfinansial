import { createFileRoute, Link } from "@tanstack/react-router";
import boardroom from "@/assets/about-boardroom.jpg";
import { MILESTONES } from "@/lib/agf-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Asia Global Finansial" },
      { name: "description", content: "AGF is an Indonesian financial advisory firm founded in 2005, building dedicated financing models for institutional clients." },
      { property: "og:title", content: "About Asia Global Finansial" },
      { property: "og:description", content: "Two decades developing financial solutions for state-owned and private enterprises across Indonesia and beyond." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative py-32 border-b border-border/60 overflow-hidden">
        <img src={boardroom} alt="" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <span className="eyebrow">About AGF</span>
          <h1 className="hairline mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
            A boutique firm built on <span className="italic text-gold">trust</span>, expertise and discretion.
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <span className="eyebrow">Who we are</span>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Asia Global Finansial (“AGF”) is a financial services firm in
              Indonesia founded in <span className="text-foreground">2005</span>,
              specializing in financial solutions for local and international
              clients across multiple regions.
            </p>
            <p>
              Our expertise is developing specific, dedicated financing models
              that enhance the financial value of our partners and clients —
              always adapted to their goals.
            </p>
            <p>
              Envisioned as a leading national financial advisory firm, our
              people combine strong business acumen with deep analytical
              capability to help institutional clients penetrate prospective
              opportunities supported by sound financial strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/60 bg-navy-deep/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="eyebrow">Milestones</span>
          <h2 className="hairline mt-4 font-display text-4xl md:text-5xl">From initiation to corporate actions.</h2>
          <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border border-gold/70 flex items-center justify-center text-gold font-display text-sm transition-all group-hover:bg-gold group-hover:text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < MILESTONES.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-10">
                  <div className="font-display text-2xl text-gold">{m.year}</div>
                  <div className="mt-1 text-sm tracking-[0.2em] uppercase">{m.title}</div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Meet the people behind the mandates.</h2>
          <Link to="/leadership" className="mt-8 inline-flex border border-gold/70 text-gold px-7 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-primary-foreground transition-colors">
            Leadership →
          </Link>
        </div>
      </section>
    </>
  );
}