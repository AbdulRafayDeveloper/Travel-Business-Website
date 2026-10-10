"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Last-resort error boundary for failures in the root layout itself. It must render its own
 * <html> and <body>, so it uses plain styles rather than the app's fonts and components.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(JSON.stringify({ event: "global_error", digest: error.digest, message: error.message }));
  }, [error]);

  return (
    <html lang="en-PK">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#FBF8F2", color: "#15262B" }}>
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center" }}>
          <h1 style={{ fontSize: 32, margin: "0 0 12px", color: "#083833" }}>Something went wrong</h1>
          <p style={{ maxWidth: 480, lineHeight: 1.6, margin: "0 0 24px", color: "#51636A" }}>
            The page could not be loaded. Please try again. If it keeps happening, message us on WhatsApp and a consultant will help you directly.
          </p>
          <button type="button" onClick={reset} style={{ background: "#0E4D45", color: "#fff", border: 0, borderRadius: 8, padding: "12px 20px", fontWeight: 700, cursor: "pointer" }}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
