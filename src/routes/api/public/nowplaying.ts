import { createFileRoute } from "@tanstack/react-router";

const STATS_URL = "https://streaming01.radiosenlinea.com.ar:10961/stats?sid=1&json=1";

export const Route = createFileRoute("/api/public/nowplaying")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const res = await fetch(STATS_URL, { headers: { Accept: "application/json" } });
          if (!res.ok) throw new Error("bad status");
          const data = (await res.json()) as { songtitle?: string; currentlisteners?: number };
          const title = typeof data.songtitle === "string" ? data.songtitle.trim() : "";
          return Response.json(
            {
              title: title.length > 0 ? title : null,
              listeners: typeof data.currentlisteners === "number" ? data.currentlisteners : null,
            },
            { headers: { "cache-control": "no-store" } },
          );
        } catch {
          return Response.json({ title: null, listeners: null }, { status: 200 });
        }
      },
    },
  },
});
