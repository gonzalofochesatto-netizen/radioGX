export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
      <p>© 2026 GX Radio. Todos los derechos reservados.</p>
      <p className="mt-2">
        Implementación Web:{" "}
        <a
          href="https://www.turadioeninternet.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-silver transition-colors hover:text-accent"
        >
          Gonzalo Fochesatto
        </a>
      </p>
    </footer>
  );
}
