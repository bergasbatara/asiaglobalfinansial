import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/agf-data";
import patternImg from "@/assets/pattern-lines.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Asia Global Finansial" },
      { name: "description", content: "Financial advisory and consulting: fund raising, M&A, corporate restructuring, IPO preparation, risk management." },
      { property: "og:title", content: "Services — AGF" },
      { property: "og:description", content: "Two practices, one philosophy of value." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative py-32 border-b border-border/60 overflow-hidden">
        <img src={patternImg} alt="" loading="lazy" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="eyebrow">Our Services</span>
          <h1 className="hairline mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Drive your financial values. <span className="italic text-gold">Shape your brighter future.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            AGF operates two integrated practices — Financial Advisory and
            Consulting — designed to meet clients at every inflection point of
            their corporate lifecycle.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-20">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-20 border-b border-border/60 last:border-b-0 last:pb-0`}
            >
              <div className="lg:col-span-4">
                <div className="font-display text-7xl text-gold/30 tabular-nums">0{i + 1}</div>
                <span className="eyebrow mt-4 inline-block">{s.tag}</span>
                <h2 className="hairline mt-3 font-display text-3xl md:text-4xl">{s.title}</h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{s.blurb}</p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {s.items.map(item => (
                    <div
                      key={item}
                      className="group flex items-start gap-4 border border-border/60 bg-card/40 p-5 hover:border-gold/70 hover:bg-card transition-all cursor-default"
                    >
                      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-gold flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-navy-deep/40 border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Have a specific mandate in mind?</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            We engage selectively. Tell us what you’re trying to accomplish and
            we’ll respond with how we’d structure it.
          </p>
          <Link to="/contact" className="mt-8 inline-flex bg-gold text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-soft transition-colors">
            Contact a Principal →
          </Link>
        </div>
      </section>
    </>
  );
}