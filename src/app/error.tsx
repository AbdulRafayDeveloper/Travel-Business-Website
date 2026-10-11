"use client";

import { useEffect } from "react";
import { LogoMark } from "@/components/graphics/LogoMark";
import { Button, LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/config/site";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(JSON.stringify({ event: "page_error", digest: error.digest, message: error.message }));
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <LogoMark className="mb-6 h-12 w-12" />
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-pale text-gold-deep">
        <Icon name="error" className="text-[32px]" />
      </span>
      <h1 className="display-title mt-6 text-4xl text-haram-deep md:text-5xl">Something went wrong</h1>
      <p className="lede mt-4 max-w-md text-slate">The page could not be loaded. Please try again, or message us and a consultant will help you directly.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={reset} icon="refresh">Try again</Button>
        <LinkButton href={whatsappUrl("Assalam o Alaikum, the website showed an error. Please help me.")} variant="whatsapp">WhatsApp support</LinkButton>
      </div>
    </Container>
  );
}
