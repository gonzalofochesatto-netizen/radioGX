# GX Radio — Landing Page

A single-page, dark-mode landing site with a live streaming player, built at `/`.

## Look and feel

- Background `#0B0C10` with subtle radial glow; text in white/metallic silver.
- Neon accent gradient `#0072FF → #00D2FF` used on the play button, live badge, and slogan glow.
- Glassmorphism cards (blurred translucent panels, thin light borders), generous whitespace, no clutter.
- Soft entrance fades and a neon pulse animation tied to playback state.

## Sections

1. **Hero** — GX Radio logo mark, glowing slogan "Música sin contaminación auditiva", and the player.
2. **Live player** — HTML5 audio on `https://streaming01.radiosenlinea.com.ar:10961`:
   - Large circular play/pause with neon pulse rings while playing.
   - "EN VIVO" badge with a pulsing blue dot.
   - Volume slider + mute toggle; buffering state while connecting; friendly message if the stream fails.
3. **About** — the provided text on the 6-decades Pop / Rock / Electrónica selection.
4. **Social** — Facebook, Instagram, TikTok icon links (new tab, `rel="noopener noreferrer"`).
5. **Floating WhatsApp** — fixed bottom-right, `#25D366`, hover scale, prefilled message link.
6. **Footer** — copyright line plus "Implementación Web: Gonzalo Fochesatto" linking to turadioeninternet.com.ar.

## SEO

Route-level head on `/`: title `GX Radio | Música sin contaminación auditiva`, the provided description, matching og/twitter tags, `og:type: website`, canonical `https://gxradio.turadioeninternet.com.ar/`, plus RadioStation JSON-LD. `lang="es"` on the document.

## Technical notes

- Rewrites `src/routes/index.tsx` (the placeholder home route); player extracted to `src/components/RadioPlayer.tsx`, plus small `SocialLinks`, `WhatsAppButton`, `SiteFooter` components.
- Colors, gradients, glow shadows and the pulse keyframes added as semantic tokens in `src/styles.css` — no hardcoded color utilities in components.
- Audio element created client-side with `crossOrigin="anonymous"`, `preload="none"`, and a cache-busting param on play so the live stream restarts rather than resuming a stale buffer. Volume/mute driven by React state.
- Logo: generated neon wordmark/wave asset imported from `src/assets` (replaceable if you have the official file).

## Open item

If you have the official GX Radio logo file, upload it and I'll swap the generated one in.
