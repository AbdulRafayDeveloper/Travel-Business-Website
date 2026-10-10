import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideCard } from "@/components/cards/GuideCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/config/site";
import { getGuide, guides } from "@/data/guides";
import { photoKeyFor, siteImages } from "@/data/images";
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";
import { formatDate, slugify } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide not found" };
  return buildMetadata({ title: guide.title, description: guide.excerpt, path: `/umrah-guide/${guide.slug}`, photo: photoKeyFor(guide.image), eyebrow: `Umrah guide, ${guide.category}`, type: "article" });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const path = `/umrah-guide/${guide.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Umrah Guides", path: "/umrah-guide" },
    { name: guide.category, path },
  ];
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildArticleSchema(guide)} />

      <article>
        {/* Editorial header: narrow text column over a wide photo */}
        <header className="bg-ivory">
          <Container size="narrow" className="pt-6 md:pt-8">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mt-6 flex items-center gap-2 text-gold-deep"><span className="h-px w-8 bg-gold" aria-hidden="true" />{guide.category} · {guide.readMinutes} min read</p>
            <h1 className="display-title mt-3 text-3xl text-haram-deep sm:text-4xl md:text-5xl">{guide.title}</h1>
            <p className="lede mt-4 text-slate">{guide.excerpt}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate">
              <span className="flex items-center gap-1"><Icon name="edit_note" className="text-[18px] text-haram" /> Raahi group leaders</span>
              <span>Published {formatDate(guide.publishedOn)}</span>
              <span>Updated {formatDate(guide.updatedOn)}</span>
            </p>
          </Container>
          <Container className="mt-8">
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src={guide.image} alt={guide.title} fill priority sizes="(min-width: 1280px) 1240px, 100vw" className="object-cover" />
            </div>
          </Container>
        </header>

        {/* Body with sticky contents on the side */}
        <div className="bg-ivory py-section-sm md:py-section">
          <Container className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
            <nav aria-label="In this guide" className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow text-slate">In this guide</p>
              <ol className="mt-3 space-y-2 border-s-2 border-line ps-4 text-sm">
                {guide.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="text-ink hover:text-haram hover:underline"><span className="me-1.5 font-display italic text-gold-deep">{i + 1}.</span>{s.heading}</a>
                  </li>
                ))}
              </ol>
              <a href={whatsappUrl(`Assalam o Alaikum, I read your guide "${guide.title}" and have a question.`)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-3.5 py-2 text-sm font-bold text-white hover:bg-whatsapp-deep">
                <WhatsAppIcon className="h-4 w-4" /> Ask a question
              </a>
            </nav>

            <div className="prose-raahi max-w-3xl">
              {guide.sections.map((s) => (
                <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-32">
                  <h2>{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  {s.bullets && (
                    <ul>
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
              <div className="mt-10 rounded-2xl bg-sand p-5 text-sm text-ink">
                <p className="font-bold">This guide is general information, not a religious ruling.</p>
                <p className="mt-1 text-slate">For fiqh questions, consult a qualified scholar. For travel questions, our consultants are on WhatsApp every day. Rules set by Saudi authorities change; we confirm current requirements before every departure.</p>
              </div>
            </div>
          </Container>
        </div>

        <section className="bg-sand py-section-sm md:py-section" aria-labelledby="more-guides-title">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 id="more-guides-title" className="display-title text-3xl text-haram-deep md:text-4xl">More <em>guides</em>.</h2>
              <Link href="/umrah-guide" className="text-sm font-bold text-haram underline underline-offset-2">All guides</Link>
            </div>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              {others.map((g) => (
                <GuideCard key={g.slug} guide={g} variant="tile" />
              ))}
            </div>
          </Container>
        </section>
      </article>

      <CtaBand image={siteImages.ihram} title={<>Ready to go from reading to <em className="text-gold">booking</em>?</>} text="Pick a package or tell us your dates. Every booking includes the training session this guide is based on." primaryHref="/umrah-packages" primaryLabel="See packages" />
    </>
  );
}
