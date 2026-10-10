import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | AluTrade Global",
  description: "The page you are looking for does not exist. Return to AluTrade Global to explore our aluminum and metal trading services.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9ff",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
        }}
      >
        <main
          style={{ textAlign: "center", maxWidth: "600px" }}
          role="main"
          aria-labelledby="not-found-title"
        >
          <p
            style={{
              fontSize: "7rem",
              fontWeight: "900",
              color: "#11224E",
              lineHeight: 1,
              margin: "0 0 1rem",
            }}
            aria-hidden="true"
          >
            404
          </p>
          <h1
            id="not-found-title"
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "#11224E",
              marginBottom: "1rem",
            }}
          >
            Page Not Found
          </h1>
          <p
            style={{
              color: "#595f67",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            The page you are looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <nav
            aria-label="Recovery navigation"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Link
              href="/"
              style={{
                backgroundColor: "#11224E",
                color: "#ffffff",
                padding: "0.875rem 2rem",
                borderRadius: "0.75rem",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              Return to Homepage
            </Link>
            <Link
              href="/products"
              style={{
                backgroundColor: "transparent",
                color: "#11224E",
                padding: "0.875rem 2rem",
                borderRadius: "0.75rem",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "0.95rem",
                border: "2px solid #11224E",
              }}
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              style={{
                backgroundColor: "transparent",
                color: "#11224E",
                padding: "0.875rem 2rem",
                borderRadius: "0.75rem",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "0.95rem",
                border: "2px solid #11224E",
              }}
            >
              Contact Us
            </Link>
          </nav>
        </main>
      </body>
    </html>
  );
}
