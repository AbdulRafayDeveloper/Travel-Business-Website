import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { team } from "@/data/company";
import { siteImages } from "@/data/images";
import { siteConfig } from "@/config/site";

/** Director's letter: large italic serif quote on sand, with a photo in a photo-frame offset. */
export function HomeDirector() {
  const director = team[0];
  return (
    <section className="bg-sand py-section-sm md:py-section" aria-labelledby="director-title">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          <div className="absolute -start-3 -top-3 h-full w-full rounded-2xl border-2 border-gold" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image src={siteImages.duaHands.src} alt="Hands raised in dua" fill sizes="(min-width: 1024px) 360px, 70vw" className="object-cover" />
          </div>
        </div>
        <div>
          <p className="eyebrow flex items-center gap-3 text-haram"><span className="h-px w-10 bg-gold" aria-hidden="true" /> A note from our founder</p>
          <h2 id="director-title" className="sr-only">Message from the Managing Director</h2>
          <blockquote className="mt-4 space-y-4 font-display text-xl leading-relaxed text-haram-deep md:text-2xl">
            <p>“I led my first group to Makkah in 1997 with a notebook of hotel numbers and a lot of dua. What pilgrims asked me then is what they ask now: what will it really cost, how far is the hotel, and who do I call at 2 am?”</p>
            <p>“Raahi is my answer. The price is on the website. The hotel distance is in metres. And the phone is answered by someone whose name you know.”</p>
          </blockquote>
          <footer className="mt-6 flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-haram font-display text-xl text-white">{director.name.charAt(0)}</span>
            <div>
              <p className="font-bold text-ink">{director.name}</p>
              <p className="text-sm text-slate">{director.role} · {siteConfig.fullName}</p>
            </div>
          </footer>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate"><Icon name="nights_stay" className="text-[18px] text-gold-deep" /> {director.bio}</p>
        </div>
      </Container>
    </section>
  );
}
