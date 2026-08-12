# GX Radio Live

Build a modern, high-converting Landing Page in React + Tailwind CSS for an online radio station named "GX Radio". 

---

### 🎨 DESIGN & AESTHETICS:
- **Theme:** Dark Mode (Deep dark background `#0B0C10` or `#0F1117`).
- **Accent Colors:** Neon Blue / Cyber Electric Blue (`#0072FF` / `#00D2FF`) inspired by the wave icons in the logo, combined with metallic silver and white text.
- **Vibe:** Sleek, minimal, clean, and premium ("Música sin contaminación auditiva" implies zero visual clutter, modern glassmorphism UI, smooth gradients, and clean audio layout).

---

### 🔊 HERO & AUDIO PLAYER SECTION:
- Centered, high-impact hero section displaying the GX Radio logo.
- Slogan in bold, glowing text: "Música sin contaminación auditiva".
- **Custom Live Audio Player Component:**
  - Audio Stream URL: `https://streaming01.radiosenlinea.com.ar:10961` (Ensure proper HTML5 Audio element handling with crossOrigin support).
  - Prominent Play/Pause button with custom smooth neon pulsing animation when active.
  - Live indicator badge ("EN VIVO" with a pulsing blue dot).
  - Volume slider and Mute toggle.

---

### 📜 CONTENT SECTIONS:
1. **About / Radio Concept:**
   - A short, stylish section highlighting the musical style:
     *"Explorá los mejores sonidos actuales de las últimas 6 décadas. Una selección cuidada de Pop, Rock y Electrónica diseñada para disfrutar sin estridencias. GX Radio: Música, sin contaminación auditiva."*
2. **Social Media Section:**
   - Social icon links (using lucide-react or SVG icons):
     - Facebook: `https://www.facebook.com/share/1BiKfqTJVS/`
     - Instagram: `https://www.instagram.com/gx_radio`
     - TikTok: `https://www.tiktok.com/@gx.radio`

---

### 💬 FLOATING ELEMENTS:
- **Floating WhatsApp Button:**
  - Position: Bottom right corner (`fixed bottom-6 right-6 z-50`).
  - WhatsApp Green color (`#25D366`) with hover scale effect.
  - Link: `https://wa.me/5493415402298?text=Hola%20GX%20Radio!%20Estoy%20escuchando%20la%20radio%20desde%20la%20web.`

---

### 🦶 FOOTER & CREDITS:
- Minimalist footer text:
  - `© 2026 GX Radio. Todos los derechos reservados.`
  - `Implementación Web: Gonzalo Fochesatto` as a link pointing to `https://www.turadioeninternet.com.ar/` (opens in new tab with `rel="noopener noreferrer"`).

---

### 🔍 SEO & META DATA:
- Canonical URL: `https://gxradio.turadioeninternet.com.ar/`
- Page Title: `GX Radio | Música sin contaminación auditiva`
- Meta Description: `Escuchá GX Radio en vivo. Pop, Rock y Electrónica de las últimas 6 décadas. Sonidos actuales y música sin contaminación auditiva.`

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/44cfdc96-765e-4ae3-9c1f-fe68c8b151e4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
