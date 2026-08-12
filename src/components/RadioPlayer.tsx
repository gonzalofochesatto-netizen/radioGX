import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2, Music2, Pause, Play, Volume2, VolumeX } from "lucide-react";

const STREAM_URL = "https://streaming01.radiosenlinea.com.ar:10961/stream";

export function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [track, setTrack] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch("/api/public/nowplaying");
        const data = (await res.json()) as { title: string | null };
        if (active) setTrack(data.title);
      } catch {
        /* ignore */
      }
    };
    load();
    const id = window.setInterval(load, 15000);
    return () => {
      active = false;
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audio.volume = volume;
    audioRef.current = audio;

    const onPlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setHasError(false);
    };
    const onWaiting = () => setIsLoading(true);
    const onPause = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };
    const onError = () => {
      setHasError(true);
      setIsPlaying(false);
      setIsLoading(false);
    };

    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      audio.pause();
      audio.src = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying || isLoading) {
      audio.pause();
      audio.src = "";
      setIsPlaying(false);
      setIsLoading(false);
      return;
    }

    setHasError(false);
    setIsLoading(true);
    // Cache-buster so the live stream always starts at "now".
    audio.src = `${STREAM_URL}?_=${Date.now()}`;
    audio.load();
    try {
      await audio.play();
      // If the stream never starts producing sound, surface an error.
      window.setTimeout(() => {
        if (
          audioRef.current &&
          audioRef.current.paused === false &&
          audioRef.current.readyState < 3
        ) {
          setHasError(true);
        }
      }, 15000);
    } catch {
      setHasError(true);
      setIsLoading(false);
    }
  }, [isPlaying, isLoading]);

  return (
    <div className="glass-panel neon-glow mx-auto w-full max-w-md rounded-3xl border border-accent/40 p-8 transition-all duration-300 hover:border-accent/80">
      <div className="flex items-center justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-silver uppercase">
          <span className="animate-live-dot inline-block size-2 rounded-full bg-accent" />
          En vivo
        </span>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pausar GX Radio" : "Reproducir GX Radio"}
          className={`neon-gradient flex size-24 items-center justify-center rounded-full text-primary-foreground transition-transform duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
            isPlaying ? "animate-neon-pulse" : "shadow-[var(--shadow-neon)]"
          }`}
        >
          {isLoading ? (
            <Loader2 className="size-10 animate-spin" />
          ) : isPlaying ? (
            <Pause className="size-10" fill="currentColor" />
          ) : (
            <Play className="ml-1 size-10" fill="currentColor" />
          )}
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {hasError
          ? "No pudimos conectar con la transmisión. Intentá nuevamente en unos segundos."
          : isLoading
            ? "Conectando con la transmisión…"
            : isPlaying
              ? "Estás escuchando GX Radio"
              : "Presioná play para escuchar en vivo"}
      </p>

      {track && (
        <div className="mt-6 rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-center">
          <p className="text-[0.65rem] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
            Reproduciendo ahora
          </p>
          <p className="mt-1.5 flex items-center justify-center gap-2 text-sm font-medium text-silver">
            <Music2 className="size-4 shrink-0 text-accent" />
            <span className="line-clamp-2">{track}</span>
          </p>
        </div>
      )}

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIsMuted((m) => !m)}
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          className="rounded-full border border-border bg-secondary/60 p-2.5 text-silver transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="size-5" />
          ) : (
            <Volume2 className="size-5" />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={isMuted ? 0 : volume}
          aria-label="Volumen"
          onChange={(e) => {
            setVolume(Number(e.target.value));
            setIsMuted(false);
          }}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-accent"
        />
      </div>
    </div>
  );
}
