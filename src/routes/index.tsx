import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Process } from "@/components/site/Process";
import { Technology } from "@/components/site/Technology";
import { Testimonials } from "@/components/site/Testimonials";
import { CallToAction } from "@/components/site/CallToAction";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title =
  "Best IT Company in Coimbatore | Web Development, App Development & Digital Marketing Agency | Pragiso Soft Technologies";
const description =
  "Pragiso Soft Technologies — Coimbatore's top-rated IT company specializing in custom web development, mobile app development, UI/UX design, SEO, and digital marketing. Best software development company in Coimbatore delivering world-class digital solutions for startups and enterprises. Get a free consultation today.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "best IT company in Coimbatore, best software development company Coimbatore, best web development company Coimbatore, best app development company Coimbatore, best digital marketing agency Coimbatore, best UI UX design company Coimbatore, best SEO company Coimbatore, top software company Coimbatore, best portfolio website design, website design Coimbatore, mobile app development Coimbatore, ecommerce website development Coimbatore, custom software development Coimbatore, React development India, Flutter app development India, affordable web development Coimbatore, best startup IT company Tamil Nadu, IT company near me, software development near me Coimbatore, best support IT company Coimbatore, top 10 IT companies in Coimbatore, web application development Coimbatore, best digital agency in India, best web design company Tamil Nadu",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pragisotech.in/" },
      { property: "og:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Pragiso Soft Technologies — Best IT Company in Coimbatore" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://www.pragisotech.in/pragiso-services-hero.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.pragisotech.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            // ─── Organization + LocalBusiness (Coimbatore) ───
            {
              "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
              "@id": "https://www.pragisotech.in/#organization",
              name: "Pragiso Soft Technologies",
              alternateName: ["PragisoTech", "Pragiso", "Pragiso Softs"],
              url: "https://www.pragisotech.in",
              logo: {
                "@type": "ImageObject",
                url: "https://www.pragisotech.in/pragiso-logo.png",
                width: 512,
                height: 512,
              },
              image: "https://www.pragisotech.in/pragiso-services-hero.png",
              description:
                "Best IT company in Coimbatore offering expert web development, mobile app development, UI/UX design, SEO and digital marketing services. We build world-class digital products for startups, SMBs and enterprises across India.",
              slogan: "Innovate • Build • Grow",
              email: "pragisosofts@gmail.com",
              telephone: "+919080961649",
              priceRange: "$$",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Bank Transfer, Online Payment",
              openingHours: "Mo-Sa 09:00-18:00",
              foundingDate: "2024",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 2,
                maxValue: 10,
              },
              areaServed: [
                { "@type": "City", name: "Coimbatore" },
                { "@type": "State", name: "Tamil Nadu" },
                { "@type": "Country", name: "India" },
                { "@type": "AdministrativeArea", name: "Global" },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 11.0168,
                  longitude: 76.9558,
                },
                geoRadius: "50000",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Coimbatore",
                addressRegion: "Tamil Nadu",
                postalCode: "641001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 11.0168,
                longitude: 76.9558,
              },
              sameAs: [
                "https://www.linkedin.com/company/pragiso-soft-technologies/",
                "https://www.instagram.com/pragisotech/",
              ],
              knowsAbout: [
                "Web Development",
                "Mobile App Development",
                "React",
                "Next.js",
                "Flutter",
                "Node.js",
                "TypeScript",
                "UI/UX Design",
                "Figma",
                "Digital Marketing",
                "Search Engine Optimization",
                "Google Ads",
                "Meta Ads",
                "E-commerce Development",
                "Custom Software Development",
                "Cloud Architecture",
                "API Development",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "47",
                reviewCount: "32",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Services by Pragiso Soft Technologies — Coimbatore",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description:
                        "Best web development services in Coimbatore — custom websites, e-commerce platforms, corporate portals, progressive web apps and React-based SPA solutions.",
                      provider: { "@id": "https://www.pragisotech.in/#organization" },
                      areaServed: "Coimbatore, Tamil Nadu, India",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description:
                        "Top mobile app development company in Coimbatore — native Android, iOS and cross-platform Flutter apps for business automation, e-commerce and on-demand services.",
                      provider: { "@id": "https://www.pragisotech.in/#organization" },
                      areaServed: "Coimbatore, Tamil Nadu, India",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "UI/UX Design",
                      description:
                        "Best UI/UX design agency in Coimbatore — user research, wireframing, interactive prototyping, design systems and conversion-focused interfaces.",
                      provider: { "@id": "https://www.pragisotech.in/#organization" },
                      areaServed: "Coimbatore, Tamil Nadu, India",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Digital Marketing & SEO",
                      description:
                        "Best digital marketing agency in Coimbatore — data-driven SEO, Google Ads, Meta Ads, social media marketing, content marketing and full-funnel lead generation.",
                      provider: { "@id": "https://www.pragisotech.in/#organization" },
                      areaServed: "Coimbatore, Tamil Nadu, India",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Software Development",
                      description:
                        "Best custom software development company in Coimbatore — enterprise applications, SaaS platforms, API integrations, cloud architecture and database design.",
                      provider: { "@id": "https://www.pragisotech.in/#organization" },
                      areaServed: "Coimbatore, Tamil Nadu, India",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-commerce Website Development",
                      description:
                        "Top e-commerce development in Coimbatore — Shopify, WooCommerce, custom storefronts, payment gateway integrations, inventory management and conversion optimization.",
                      provider: { "@id": "https://www.pragisotech.in/#organization" },
                      areaServed: "Coimbatore, Tamil Nadu, India",
                    },
                  },
                ],
              },
            },
            // ─── WebSite ───
            {
              "@type": "WebSite",
              "@id": "https://www.pragisotech.in/#website",
              url: "https://www.pragisotech.in/",
              name: "Pragiso Soft Technologies",
              alternateName: "PragisoTech",
              description:
                "Official website of Pragiso Soft Technologies — the best IT company in Coimbatore for web development, app development, digital marketing and UI/UX design.",
              publisher: {
                "@id": "https://www.pragisotech.in/#organization",
              },
              inLanguage: "en-US",
            },
            // ─── WebPage ───
            {
              "@type": "WebPage",
              "@id": "https://www.pragisotech.in/#webpage",
              url: "https://www.pragisotech.in/",
              name: title,
              description: description,
              isPartOf: {
                "@id": "https://www.pragisotech.in/#website",
              },
              about: {
                "@id": "https://www.pragisotech.in/#organization",
              },
              inLanguage: "en-US",
              datePublished: "2024-01-01T00:00:00+05:30",
              dateModified: "2026-08-19T00:00:00+05:30",
            },
            // ─── FAQ Schema (high-value search queries) ───
            {
              "@type": "FAQPage",
              "@id": "https://www.pragisotech.in/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the best IT company in Coimbatore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pragiso Soft Technologies is rated as one of the best IT companies in Coimbatore, offering comprehensive web development, mobile app development, UI/UX design, and digital marketing services with a 100% client satisfaction commitment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which is the best software development company in Coimbatore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pragiso Soft Technologies is a top-rated software development company in Coimbatore, specializing in custom web applications, mobile apps, SaaS platforms, and enterprise solutions using React, Next.js, Flutter, Node.js, and TypeScript.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does website development cost in Coimbatore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Website development costs in Coimbatore vary based on requirements. Pragiso Soft Technologies offers affordable and competitive pricing for business websites, e-commerce platforms, and custom web applications. Contact us for a free consultation and quote.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which company provides the best app development services in Coimbatore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pragiso Soft Technologies provides the best mobile app development services in Coimbatore, building high-quality Android, iOS, and cross-platform apps using Flutter and React Native for businesses of all sizes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who offers the best digital marketing and SEO services in Coimbatore?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pragiso Soft Technologies offers result-driven digital marketing and SEO services in Coimbatore, including search engine optimization, Google Ads, social media marketing, content marketing, and lead generation strategies that deliver measurable ROI.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What services does Pragiso Soft Technologies offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pragiso Soft Technologies offers Web Development, Mobile App Development (Android, iOS, Flutter), UI/UX Design, Digital Marketing, SEO, Google Ads Management, Social Media Marketing, E-commerce Development, Custom Software Development, and Cloud Solutions. We serve clients in Coimbatore, Tamil Nadu and across India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Pragiso Soft Technologies provide ongoing support and maintenance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Pragiso Soft Technologies provides comprehensive post-launch support and maintenance for all projects including bug fixes, performance optimization, feature updates, security patches, and 24/7 technical support. We are known for the best client support among IT companies in Coimbatore.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Pragiso build a portfolio website for my business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Pragiso Soft Technologies creates stunning, modern portfolio websites that showcase your brand, services, and achievements. We design conversion-optimized portfolio sites with premium aesthetics, SEO optimization, and mobile responsiveness — making us the best choice for portfolio website design in Coimbatore.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <CaseStudy />
        <Process />
        <Technology />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
