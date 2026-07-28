import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-skyline.jpg";
import patternImg from "@/assets/pattern-lines.jpg";
import { SERVICES, STATS, ACHIEVEMENTS, MILESTONES } from "@/lib/agf-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asia Global Finansial — Financial Advisory & Consulting" },
      { name: "description", content: "Indonesian financial advisory firm since 2005. Fund raising, M&A, restructuring, and strategic consulting for institutional clients." },
      { property: "og:title", content: "Asia Global Finansial" },
      { property: "og:description", content: "Drive your financial values. Shape your brighter future." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <Timeline />
      <Ticker />
      <CtaBlock />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Jakarta financial district at dusk"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.12_0.03_260/0.7)_85%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 h-full flex flex-col justify-center">
        <span className="eyebrow fade-up">Est. 2005</span>
        <h1 className="fade-up mt-6 max-w-4xl font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
          Architects of capital for <span className="italic text-gold">institutions</span> shaping Indonesia.
        </h1>
        <p className="fade-up mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Asia Global Finansial designs dedicated financing models — fund raising,
          M&amp;A, restructuring, and consulting — for state-owned and private
          enterprises across local and international markets.
        </p>
        <div className="fade-up mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-7 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-soft transition-colors"
          >
            Our Services <span aria-hidden>→</span>
          </Link>
          <Link
            to="/credentials"
            className="inline-flex items-center gap-3 border border-border text-foreground px-7 py-4 text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors"
          >
            Track Record
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-10 text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground/70 hidden md:block">
        Drive value · Shape future
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-y border-border/60 bg-navy-light/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
        {STATS.map(s => (
          <div key={s.label} className="py-10 px-6 first:pl-0 last:pr-0 text-center md:text-left">
            <div className="font-display text-3xl md:text-4xl text-gold">{s.value}</div>
            <div className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="hairline mt-4 font-display text-4xl md:text-5xl max-w-2xl">
              Two practices. One philosophy of value.
            </h2>
          </div>
          <Link to="/services" className="text-xs tracking-[0.3em] uppercase text-gold hover:opacity-80">
            Explore all →
          </Link>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <div className="space-y-1">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group w-full text-left border-l-2 px-6 py-5 transition-all ${
                  active === i
                    ? "border-gold bg-card"
                    : "border-border/40 hover:border-gold/50 hover:bg-card/40"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                  <div>
                    <div className="font-display text-xl">{s.title}</div>
                    <div className="text-xs tracking-[0.25em] uppercase text-gold/80 mt-1">{s.tag}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="relative bg-card border border-border/60 p-10 lg:p-14 overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ backgroundImage: `url(${patternImg})`, backgroundSize: "cover" }}
            />
            <div key={active} className="relative fade-up">
              <span className="eyebrow">{SERVICES[active].tag}</span>
              <h3 className="mt-4 font-display text-3xl md:text-4xl">{SERVICES[active].title}</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">{SERVICES[active].blurb}</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {SERVICES[active].items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-px w-4 bg-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-28 bg-navy-deep/50 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <span className="eyebrow">Our Milestones</span>
        <h2 className="hairline mt-4 font-display text-4xl md:text-5xl max-w-2xl">
          Two decades of patient, deliberate growth.
        </h2>
        <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-3 left-0 right-0 h-px bg-border" />
          {MILESTONES.map((m, i) => (
            <div key={m.year} className="relative group">
              <div className="h-6 w-6 rounded-full border border-gold bg-background flex items-center justify-center relative z-10 transition-all group-hover:bg-gold">
                <span className="h-2 w-2 rounded-full bg-gold group-hover:bg-background" />
              </div>
              <div className="mt-6 font-display text-2xl text-gold">{m.year}</div>
              <div className="mt-1 text-sm tracking-[0.2em] uppercase text-foreground">{m.title}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
              <span className="absolute -top-3 right-0 text-xs text-muted-foreground/40 tabular-nums">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ACHIEVEMENTS.slice(0, 10);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setOffset(o => (o + 1) % items.length), 2200);
    return () => clearInterval(id);
  }, [paused, items.length]);
  return (
    <section
      className="py-20 border-b border-border/60"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Selected Mandates</span>
            <h2 className="hairline mt-4 font-display text-4xl md:text-5xl">A track record across sectors.</h2>
          </div>
          <Link to="/credentials" className="text-xs tracking-[0.3em] uppercase text-gold hover:opacity-80 hidden md:block">
            See all →
          </Link>
        </div>
        <div className="relative overflow-hidden border-y border-border/60 bg-card/30">
          <ul className="divide-y divide-border/60">
            {[0, 1, 2, 3].map(i => {
              const item = items[(offset + i) % items.length];
              return (
                <li
                  key={`${item.sector}-${i}`}
                  className="grid grid-cols-12 items-center px-6 py-5 fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="col-span-6 md:col-span-5 font-display text-lg truncate">{item.sector}</span>
                  <span className="col-span-3 md:col-span-3 text-sm text-muted-foreground">{item.type}</span>
                  <span className="hidden md:block col-span-2 text-xs tracking-[0.2em] uppercase text-gold/80">{item.market}</span>
                  <span className="col-span-3 md:col-span-2 text-xs tracking-[0.2em] uppercase text-right text-muted-foreground">{item.currency} · {item.role}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CtaBlock() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <span className="eyebrow">Engage With AGF</span>
        <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
          When the mandate is consequential, <span className="italic text-gold">precision matters.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Speak with our principals about your next capital, M&amp;A or strategic
          undertaking.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-soft transition-colors"
        >
          Start a Conversation →
        </Link>
      </div>
    </section>
  );
}
