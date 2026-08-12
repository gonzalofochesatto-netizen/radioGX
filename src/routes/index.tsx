import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { RadioPlayer } from "@/components/RadioPlayer";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SiteFooter } from "@/components/SiteFooter";

const TITLE = "GX Radio | Música sin contaminación auditiva";
const DESCRIPTION =
  "Escuchá GX Radio en vivo. Pop, Rock y Electrónica de las últimas 6 décadas. Sonidos actuales y música sin contaminación auditiva.";
const CANONICAL = "https://gxradio.turadioeninternet.com.ar/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RadioStation",
          name: "GX Radio",
          slogan: "Música sin contaminación auditiva",
          description: DESCRIPTION,
          url: CANONICAL,
          sameAs: [
            "https://www.facebook.com/share/1BiKfqTJVS/",
            "https://www.instagram.com/gx_radio",
            "https://www.tiktok.com/@gx.radio",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-20%] h-[60vh] opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, var(--accent) 0%, transparent 70%)",
        }}
      />

      <main className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-16">
        <img
          src={logoImg}
          alt="GX Radio"
          width={478}
          height={478}
          className="animate-rise-in neon-glow w-56 rounded-3xl ring-2 ring-accent/60 transition-transform duration-300 hover:scale-105 hover:ring-accent sm:w-64"
        />

        <h1 className="animate-rise-in text-glow mt-4 text-center text-3xl font-bold text-balance text-foreground sm:text-5xl">
          Música sin contaminación auditiva
        </h1>

        <p className="animate-rise-in mt-4 max-w-xl text-center text-base text-muted-foreground">
          Transmisión en vivo, las 24 horas. Pop, Rock y Electrónica seleccionados con criterio.
        </p>

        <section className="mt-12 w-full" aria-label="Reproductor en vivo">
          <RadioPlayer />
        </section>

        <section className="glass-panel neon-glow mt-24 w-full rounded-3xl border border-accent/30 p-10 text-center transition-all duration-300 hover:border-accent/60">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Seis décadas de buena música
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explorá los mejores sonidos actuales de las últimas 6 décadas. Una selección cuidada de
            Pop, Rock y Electrónica diseñada para disfrutar sin estridencias.{" "}
            <span className="text-silver">GX Radio: Música, sin contaminación auditiva.</span>
          </p>
        </section>

        <section className="mt-20 w-full text-center" aria-label="Redes sociales">
          <h2 className="text-sm font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            Seguinos
          </h2>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
