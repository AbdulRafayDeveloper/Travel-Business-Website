"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9ff",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
      }}
      role="main"
      aria-labelledby="error-title"
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
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
          500
        </p>
        <h1
          id="error-title"
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#11224E",
            marginBottom: "1rem",
          }}
        >
          Something Went Wrong
        </h1>
        <p
          style={{
            color: "#595f67",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          We apologize for the inconvenience. Please try again or contact our
          support team.
        </p>
        <nav
          aria-label="Error recovery navigation"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <button
            onClick={reset}
            style={{
              backgroundColor: "#11224E",
              color: "#ffffff",
              padding: "0.875rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: "700",
              fontSize: "0.95rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
          <Link
            href="/"
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
            Return to Homepage
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
            Contact Support
          </Link>
        </nav>
      </div>
    </main>
  );
}
