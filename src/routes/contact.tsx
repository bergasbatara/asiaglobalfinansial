import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Asia Global Finansial" },
      { name: "description", content: "Speak with AGF principals about your next capital, M&A or strategic mandate. Office located in Jakarta, Indonesia." },
      { property: "og:title", content: "Contact AGF" },
      { property: "og:description", content: "Engage with our principals." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="py-24 border-b border-border/60">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <span className="eyebrow">Engage Us</span>
          <h1 className="hairline mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
            Begin a <span className="italic text-gold">conversation</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            We work on a limited number of mandates at any time. Share a brief
            outline of your project and a principal will respond directly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-16">
          <form
            onSubmit={e => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-6"
          >
            <Field label="Full name" name="name" required />
            <Field label="Organization" name="org" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Mandate type" name="mandate" placeholder="e.g. MTN issuance, M&A, restructuring" />
            <div>
              <label className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">Brief</label>
              <textarea
                required
                rows={6}
                className="w-full bg-card/60 border border-border focus:border-gold focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"
                placeholder="Describe your objective and timeline."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-soft transition-colors disabled:opacity-60"
            >
              {sent ? "Received — we will be in touch" : "Send Brief →"}
            </button>
          </form>
          <aside className="space-y-10">
            <div>
              <span className="eyebrow">Office</span>
              <p className="mt-4 text-foreground leading-relaxed">
                Bellezza Shopping Arcade, Lt. 2, No i-15<br />
                Jl. Letjend Soepeno No. 34<br />
                Jakarta, Indonesia 12210
              </p>
            </div>
            <div>
              <span className="eyebrow">Direct</span>
              <ul className="mt-4 space-y-2 text-foreground">
                <li>office@agf.co.id</li>
                <li>asiaglobalfinansial@gmail.com</li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">Online</span>
              <ul className="mt-4 space-y-2 text-foreground">
                <li><a className="hover:text-gold transition-colors" href="https://www.asiaglobalfinansial.com" target="_blank" rel="noreferrer">www.asiaglobalfinansial.com</a></li>
                
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-card/60 border border-border focus:border-gold focus:outline-none px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors"
      />
    </div>
  );
}