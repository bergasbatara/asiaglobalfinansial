import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ACHIEVEMENTS } from "@/lib/agf-data";

export const Route = createFileRoute("/credentials")({
  head: () => ({
    meta: [
      { title: "Credentials — Asia Global Finansial" },
      { name: "description", content: "Selected mandates across MTN issuance, M&A, syndication, restructuring and consulting — for SOE and private enterprises in Indonesia and abroad." },
      { property: "og:title", content: "Credentials — AGF" },
      { property: "og:description", content: "A track record across sectors, markets and currencies." },
    ],
  }),
  component: CredentialsPage,
});

const FILTERS = ["All", "Debt", "Merger & Acquisition", "Loan Syndication", "Restructuring", "Securitization", "Risk Management Consulting", "Due Diligence", "Business Spin-off"] as const;
const MARKETS = ["All", "Indonesia", "International"] as const;

function CredentialsPage() {
  const [type, setType] = useState<(typeof FILTERS)[number]>("All");
  const [market, setMarket] = useState<(typeof MARKETS)[number]>("All");

  const filtered = useMemo(
    () =>
      ACHIEVEMENTS.filter(
        a => (type === "All" || a.type === type) && (market === "All" || a.market === market),
      ),
    [type, market],
  );

  return (
    <>
      <section className="py-24 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="eyebrow">Credentials</span>
          <h1 className="hairline mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Selected mandates, <span className="italic text-gold">filtered the way you read them.</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 mb-10">
            <div>
              <div className="eyebrow mb-3">Transaction Type</div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map(f => (
                  <button
                    key={f}
                    onClick={() => setType(f)}
                    className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all ${
                      type === f
                        ? "bg-gold text-primary-foreground border-gold"
                        : "border-border/60 text-muted-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow mb-3">Market</div>
              <div className="flex flex-wrap gap-2">
                {MARKETS.map(m => (
                  <button
                    key={m}
                    onClick={() => setMarket(m)}
                    className={`text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all ${
                      market === m
                        ? "bg-gold text-primary-foreground border-gold"
                        : "border-border/60 text-muted-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
            {filtered.length} mandate{filtered.length === 1 ? "" : "s"}
          </div>

          <div className="border border-border/60">
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-card/60 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <div className="col-span-6">Sector</div>
              <div className="col-span-3">Transaction</div>
              <div className="col-span-2">Market</div>
              <div className="col-span-1">Ccy</div>
            </div>
            <ul className="divide-y divide-border/60">
              {filtered.map((a, idx) => (
                <li
                  key={`${a.sector}-${idx}`}
                  className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-card/40 transition-colors fade-up"
                  style={{ animationDelay: `${idx * 25}ms` }}
                >
                  <div className="col-span-12 md:col-span-6 font-display text-lg flex items-center gap-3">
                  {a.sector}
                    {a.logo && <img src={a.logo} alt={`${a.sector} logo`} className="h-7 w-auto object-contain" />}
                  </div>
                  <div className="col-span-6 md:col-span-3 text-sm text-muted-foreground">{a.type}</div>
                  <div className="col-span-3 md:col-span-2 text-xs tracking-[0.2em] uppercase text-gold/80">{a.market}</div>
                  <div className="col-span-3 md:col-span-1 text-xs tabular-nums text-muted-foreground">{a.currency}</div>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-6 py-16 text-center text-muted-foreground text-sm">No mandates match this filter.</li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}