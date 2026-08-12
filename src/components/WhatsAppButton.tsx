import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5493415402298?text=Hola%20GX%20Radio!%20Estoy%20escuchando%20la%20radio%20desde%20la%20web.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
