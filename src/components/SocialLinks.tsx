import { Facebook, Instagram, Music2 } from "lucide-react";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/share/1BiKfqTJVS/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/gx_radio", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@gx.radio", Icon: Music2 },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-5">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="glass-panel group rounded-2xl p-4 transition-transform duration-200 hover:scale-110"
        >
          <Icon className="size-6 text-silver transition-colors group-hover:text-accent" />
        </a>
      ))}
    </div>
  );
}
