import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Asia Global Finansial — Financial Advisory & Consulting" },
      { name: "description", content: "AGF is an Indonesian financial advisory firm specializing in fund raising, M&A, restructuring and corporate consulting since 2005." },
      { name: "author", content: "Asia Global Finansial" },
      { property: "og:title", content: "Asia Global Finansial — Financial Advisory & Consulting" },
      { property: "og:description", content: "AGF is an Indonesian financial advisory firm specializing in fund raising, M&A, restructuring and corporate consulting since 2005." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Asia Global Finansial — Financial Advisory & Consulting" },
      { name: "twitter:description", content: "AGF is an Indonesian financial advisory firm specializing in fund raising, M&A, restructuring and corporate consulting since 2005." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0959d0de-e00b-4b1f-ad21-dbbaa642d803/id-preview-04557047--333aa96e-90cc-4381-b3bc-1257ad45008a.lovable.app-1781067130017.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0959d0de-e00b-4b1f-ad21-dbbaa642d803/id-preview-04557047--333aa96e-90cc-4381-b3bc-1257ad45008a.lovable.app-1781067130017.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}

function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/credentials", label: "Credentials" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.12_0.03_260/0.75)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/60 text-gold font-display text-lg leading-none">A</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base tracking-wider text-foreground">ASIA GLOBAL FINANSIAL</span>
            <span className="block w-full text-[0.6rem] tracking-wider text-gold uppercase text-justify [text-align-last:justify]">Financial Advisory and Consulting</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative py-1"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase border border-gold/70 text-gold px-5 py-2.5 hover:bg-gold hover:text-primary-foreground transition-colors"
        >
          Engage Us
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/60 text-gold font-display text-lg">A</span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg tracking-wider">ASIA GLOBAL FINANSIAL</span>
              <span className="block w-full text-xs tracking-wider text-gold uppercase text-justify [text-align-last:justify]">Financial Advisory and Consulting</span>
            </span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
            An Indonesian financial advisory firm developing dedicated financing
            models for institutional clients since 2005.
          </p>
        </div>
        <div>
          <h4 className="eyebrow">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map(n => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Office</h4>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Bellezza Shopping Arcade, Lt. 2, No i-15<br />
            Jl. Letjend Soepeno No. 34<br />
            Jakarta, Indonesia 12210
          </p>
          <p className="mt-4 text-sm text-muted-foreground">office@agf.co.id</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Asia Global Finansial. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase text-gold/80">Drive value · Shape future</p>
        </div>
      </div>
    </footer>
  );
}
