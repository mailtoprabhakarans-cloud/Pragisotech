import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, AlertCircle, Wrench, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found | Pragiso Soft Technologies" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { study } = loaderData;
    const title = `${study.name} Case Study | Pragiso Soft Technologies`;
    const description = `${study.desc} See the challenge, our approach and the measured results for this ${study.category.toLowerCase()} project.`;
    const canonicalUrl = `https://www.pragisotech.in/case-studies/${study.slug}`;
    const ogImage = `https://www.pragisotech.in/pragiso-services-hero.png`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: `${study.name} Case Study` },
        { property: "article:section", content: study.category },
        { property: "article:author", content: "Pragiso Soft Technologies" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.pragisotech.in/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Case Studies",
                    item: "https://www.pragisotech.in/case-studies",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: study.name,
                    item: canonicalUrl,
                  },
                ],
              },
              {
                "@type": "TechArticle",
                "@id": `${canonicalUrl}#article`,
                headline: title,
                description: description,
                image: ogImage,
                url: canonicalUrl,
                inLanguage: "en-US",
                author: {
                  "@type": "Organization",
                  name: "Pragiso Soft Technologies",
                  url: "https://www.pragisotech.in",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Pragiso Soft Technologies",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.pragisotech.in/pragiso-logo.png",
                  },
                },
                about: {
                  "@type": "Thing",
                  name: study.category,
                },
                ...(study.testimonial
                  ? {
                      review: {
                        "@type": "Review",
                        reviewBody: study.testimonial.quote,
                        author: {
                          "@type": "Person",
                          name: study.testimonial.author,
                          jobTitle: study.testimonial.role,
                        },
                        reviewRating: {
                          "@type": "Rating",
                          ratingValue: "5",
                          bestRating: "5",
                        },
                      },
                    }
                  : {}),
              },
            ],
          }),
        },
      ],
    };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { study } = Route.useLoaderData();
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40">
          <div
            aria-hidden
            className="absolute inset-0 -z-20"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />
          <div aria-hidden className="grid-backdrop absolute inset-0 -z-20 opacity-40" />
          <div className="mx-auto fluid-container">
            <Link
              to="/case-studies"
              className="btn-magnetic glass-panel glow-border group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide text-foreground transition-all duration-300 hover:text-accent hover:shadow-[var(--shadow-glow)]"
            >
              <ArrowLeft className="size-4 text-accent transition-transform duration-300 group-hover:-translate-x-1" />
              All case studies
            </Link>
            <div className="mt-8 grid items-center gap-10 lg:gap-14 2xl:grid-cols-[1.05fr_0.95fr]">
              <div className="reveal" data-visible="true">
                <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.2em] text-accent uppercase">
                  {study.category}
                </span>
                <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-[1.05] font-bold text-balance">
                  {study.name}
                </h1>
                <p className="mt-6 max-w-xl 2xl:max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground">
                  {study.desc}
                </p>
                <dl className="mt-9 grid gap-4 sm:grid-cols-3">
                  {[
                    { k: "Client", v: study.client },
                    { k: "Industry", v: study.industry },
                    { k: "Timeline", v: study.timeline },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="rounded-2xl border border-border bg-secondary/30 p-4 3xl:p-5"
                    >
                      <dt className="text-[11px] sm:text-xs tracking-[0.22em] text-muted-foreground uppercase">
                        {item.k}
                      </dt>
                      <dd className="mt-1.5 text-sm sm:text-base 3xl:text-lg font-semibold">
                        {item.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="reveal" data-visible="true">
                <div className="glass-panel overflow-hidden rounded-[2rem] p-3 shadow-[var(--shadow-glow)]">
                  <img
                    src={study.image}
                    alt={`${study.name} project interface by Pragiso Soft Technologies`}
                    width={1024}
                    height={768}
                    className="w-full rounded-[1.5rem] object-cover h-[320px] sm:h-[400px] lg:h-[480px] 2xl:h-[560px]"
                  />
                </div>
              </div>
            </div>

            <Reveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="glass-panel rounded-2xl p-6 3xl:p-8 text-center shadow-[var(--shadow-elegant)]"
                >
                  <p className="text-gradient text-3xl font-bold sm:text-4xl 3xl:text-5xl">
                    {m.prefix ?? ""}
                    {m.value}
                    {m.suffix}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm 3xl:text-base text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              ))}
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="glass-panel h-full rounded-3xl p-7 sm:p-8 3xl:p-10">
                  <span className="grid size-10 sm:size-12 place-items-center rounded-xl border border-border bg-secondary/50 text-accent">
                    <AlertCircle className="size-5 sm:size-6" aria-hidden />
                  </span>
                  <h2 className="mt-5 text-xl sm:text-2xl 3xl:text-3xl font-semibold">
                    The Challenge
                  </h2>
                  <p className="mt-3 text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
                    {study.challenge}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="glass-panel h-full rounded-3xl p-7 sm:p-8 3xl:p-10">
                  <span className="grid size-10 sm:size-12 place-items-center rounded-xl border border-border bg-secondary/50 text-accent">
                    <Wrench className="size-5 sm:size-6" aria-hidden />
                  </span>
                  <h2 className="mt-5 text-xl sm:text-2xl 3xl:text-3xl font-semibold">
                    Our Solution
                  </h2>
                  <p className="mt-3 text-sm sm:text-base 3xl:text-lg leading-relaxed text-muted-foreground">
                    {study.solution}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-semibold">How We Worked</h2>
                <ol className="mt-6 space-y-5">
                  {study.approach.map((a, i) => (
                    <Reveal as="li" key={a.title} delay={i * 80}>
                      <div className="glass-panel flex gap-4 rounded-2xl p-6">
                        <span className="text-gradient text-lg font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold">{a.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {a.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">What We Delivered</h2>
                <ul className="mt-6 space-y-3">
                  {study.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-9 text-sm font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  Services & Stack
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {[...study.services, ...study.tags].map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Reveal className="mt-14">
              <blockquote className="glass-panel rounded-3xl p-8 md:p-10">
                <p className="text-lg leading-relaxed text-balance md:text-xl">
                  “{study.testimonial.quote}”
                </p>
                <footer className="mt-5 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{study.testimonial.author}</span>{" "}
                  — {study.testimonial.role}
                </footer>
              </blockquote>
            </Reveal>

            <Reveal className="mt-10">
              <div className="rounded-3xl border border-border bg-secondary/30 p-8">
                <h2 className="text-xl font-semibold">The Outcome</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {study.outcome}
                </p>
                <Button variant="hero" size="lg" className="mt-7 rounded-xl" asChild>
                  <Link to="/" hash="contact">
                    Start a Similar Project <ArrowRight />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <div className="mt-20">
              <h2 className="text-2xl font-semibold">More Case Studies</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {others.map((o, i) => (
                  <Reveal key={o.slug} delay={i * 80}>
                    <Link
                      to="/case-studies/$slug"
                      params={{ slug: o.slug }}
                      className="glass-panel group block h-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5"
                    >
                      <img
                        src={o.image}
                        alt={`${o.name} case study preview`}
                        width={640}
                        height={480}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="p-5">
                        <p className="text-xs text-accent">{o.category}</p>
                        <h3 className="mt-1.5 text-base font-semibold">{o.name}</h3>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
