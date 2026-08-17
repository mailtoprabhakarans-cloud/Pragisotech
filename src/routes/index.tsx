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

const title = "Pragiso Soft Technologies | Web Development, App Development & Digital Marketing";
const description =
  "Pragiso Soft Technologies provides modern web development, mobile app development, digital marketing and UI/UX design solutions to help businesses innovate, build and grow.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pragiso Soft Technologies",
          slogan: "Innovate • Build • Grow",
          description,
          email: "pragisosofts@gmail.com",
          url: "https://www.pragisotech.in",
          address: { "@type": "PostalAddress", addressCountry: "India" },
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
