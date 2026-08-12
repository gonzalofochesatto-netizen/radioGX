import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";
import { RadioPlayer } from "@/components/RadioPlayer";
import { AudioVisualizerBackground } from "@/components/AudioVisualizerBackground";
import { SocialLinks } from "@/components/SocialLinks";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SiteFooter } from "@/components/SiteFooter";
import { Disc, Headphones, Radio, Sparkles, Volume2, Zap } from "lucide-react";

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
  const [isPlaying, setIsPlaying] = useState(false);

  const GENRES = [
    {
      title: "Pop Selección",
      desc: "Los clásicos que hicieron historia y los éxitos actuales.",
      icon: Sparkles,
      color: "from-sky-500/20 to-blue-600/20 text-sky-400 border-sky-500/30",
    },
    {
      title: "Rock Esencial",
      desc: "Guitarras y potencia de las últimas 6 décadas.",
      icon: Zap,
      color: "from-indigo-500/20 to-purple-600/20 text-indigo-400 border-indigo-500/30",
    },
    {
      title: "Electrónica & Deep",
      desc: "Ritmos envolventes y sofisticados para acompañar tu día.",
      icon: Disc,
      color: "from-cyan-500/20 to-teal-600/20 text-cyan-400 border-cyan-500/30",
    },
    {
      title: "Sonido de Alta Fidelidad",
      desc: "Audio cristalino optimizado sin distorsión ni volúmenes estridentes.",
      icon: Headphones,
      color: "from-purple-500/20 to-pink-600/20 text-purple-400 border-purple-500/30",
    },
    {
      title: "Transmisión 24/7",
      desc: "Compañía ininterrumpida las 24 horas del día, los 365 días.",
      icon: Radio,
      color: "from-blue-500/20 to-indigo-600/20 text-blue-400 border-blue-500/30",
    },
    {
      title: "Cero Contaminación",
      desc: "Programación cuidada sin exceso de gritos ni pausas molestas.",
      icon: Volume2,
      color: "from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Dynamic Animated Particle & Soundwave Canvas Background */}
      <AudioVisualizerBackground isPlaying={isPlaying} />

      <main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-16 pb-20">
        {/* Logo Container with Animated Concentric Radio Waves */}
        <div className="relative flex items-center justify-center py-4">
          {/* Radio Signal Outer Waves */}
          <div
            className={`pointer-events-none absolute size-72 rounded-3xl border border-sky-400/40 bg-sky-500/5 sm:size-80 ${
              isPlaying ? "animate-radio-wave-1" : "opacity-30"
            }`}
          />
          <div
            className={`pointer-events-none absolute size-80 rounded-3xl border border-accent/30 bg-accent/5 sm:size-96 ${
              isPlaying ? "animate-radio-wave-2" : "opacity-20"
            }`}
          />

          {/* Logo Image with Neon Glow */}
          <img
            src={logoImg}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/logo.png";
            }}
            alt="GX Radio Logo"
            width={478}
            height={478}
            className="animate-rise-in neon-glow relative z-10 w-56 rounded-3xl ring-2 ring-accent/60 transition-all duration-500 hover:scale-105 hover:ring-accent sm:w-64"
          />
        </div>

        <h1 className="animate-rise-in text-glow mt-6 text-center text-3xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
          Música sin contaminación auditiva
        </h1>

        <p className="animate-rise-in mt-4 max-w-xl text-center text-base font-normal text-muted-foreground sm:text-lg">
          Transmisión en vivo las 24 horas. Pop, Rock y Electrónica seleccionados con criterio para
          acompañar tu día.
        </p>

        {/* Live Stream Player Card */}
        <section className="mt-10 w-full" aria-label="Reproductor en vivo">
          <RadioPlayer onPlayStateChange={setIsPlaying} />
        </section>

        {/* Genre Highlights Grid */}
        <section className="mt-20 w-full" aria-label="Estilos musicales">
          <div className="text-center">
            <h2 className="text-xs font-bold tracking-[0.3em] text-accent uppercase">
              La propuesta sonora
            </h2>
            <p className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              Lo mejor de las últimas 6 décadas
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GENRES.map((g) => {
              const IconComp = g.icon;
              return (
                <div
                  key={g.title}
                  className="glass-panel group relative overflow-hidden rounded-2xl border border-border/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
                >
                  <div
                    className={`inline-flex rounded-xl border bg-gradient-to-br p-3 ${g.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComp className="size-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Brand Banner Card */}
        <section className="glass-panel neon-glow mt-20 w-full rounded-3xl border border-accent/40 p-8 text-center transition-all duration-300 hover:border-accent/80 sm:p-12">
          <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent uppercase">
            Estilo GX
          </span>
          <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Seis décadas de buena música
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explorá los mejores sonidos de Pop, Rock y Electrónica. Una selección cuidada diseñada
            para disfrutar en tu casa, trabajo o auto.{" "}
            <span className="font-semibold text-silver">
              GX Radio: Música, sin contaminación auditiva.
            </span>
          </p>
        </section>

        {/* Social Networks */}
        <section className="mt-20 w-full text-center" aria-label="Redes sociales">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            Conectate con nosotros
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
