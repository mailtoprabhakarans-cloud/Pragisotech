import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal, SectionHeading } from "./Reveal";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "pragisosofts@gmail.com",
    href: "mailto:pragisosofts@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: MapPin, label: "Location", value: "India", href: undefined },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

export function Contact() {
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "";
    const company = (formData.get("company") as string) || "";
    const detailsText = (formData.get("details") as string) || "";

    setIsSubmitting(true);

    try {
      if (!isSupabaseConfigured()) {
        toast.info("Inquiry received!", {
          description:
            "Note: Add your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env to save inquiries to Supabase and send emails to pragisosofts@gmail.com.",
        });
      } else {
        const { error } = await supabase.from("inquiries").insert([
          {
            name,
            email,
            phone,
            company,
            service: service || "General Inquiry",
            details: detailsText,
          },
        ]);

        if (error) {
          throw error;
        }

        toast.success("Project inquiry sent successfully!", {
          description: `Our team has received your message and will reach out shortly to ${email}.`,
        });
      }

      form.reset();
      setService("");
    } catch (err: any) {
      console.error("Error submitting inquiry to Supabase:", err);
      const isFetchError = err?.message === "Failed to fetch" || err?.name === "TypeError";
      toast.error("Failed to send inquiry", {
        description: isFetchError
          ? "Unable to connect to Supabase database. Please check VITE_SUPABASE_URL in your .env file."
          : (err?.message || "Please check your database connection or try again later."),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 3xl:py-44">
      <div className="mx-auto fluid-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Create Something Amazing"
          subtitle="Share a few details about your project and we'll come back with a clear next step."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] 2xl:grid-cols-[1.1fr_0.9fr] 3xl:gap-10">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="card-shine glass-panel rounded-3xl p-6 sm:p-9 3xl:p-12 shadow-[var(--shadow-elegant)] transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="3xl:text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="3xl:py-3 3xl:text-base"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="3xl:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="3xl:py-3 3xl:text-base"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="3xl:text-base">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="3xl:py-3 3xl:text-base"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company" className="3xl:text-base">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company name"
                    className="3xl:py-3 3xl:text-base"
                  />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="service" className="3xl:text-base">
                    Service Required
                  </Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="w-full 3xl:py-3 3xl:text-base">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="app">App Development</SelectItem>
                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="details" className="3xl:text-base">
                    Project Details
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    rows={5}
                    required
                    placeholder="Tell us about your goals, timeline and budget range."
                    className="3xl:text-base"
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isSubmitting}
                className="btn-magnetic mt-7 w-full rounded-xl 3xl:py-4 3xl:text-lg"
              >
                {isSubmitting ? (
                  <>
                    Sending Inquiry... <Loader2 className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Project Inquiry <Send />
                  </>
                )}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={100} className="grid content-start gap-5">
            <ul className="card-shine glass-panel grid gap-5 rounded-3xl p-6 sm:p-7 3xl:p-9 transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]">
              {details.map((d) => (
                <li key={d.label} className="flex min-w-0 items-center gap-4">
                  <span className="grid size-11 3xl:size-13 shrink-0 place-items-center rounded-xl border border-border bg-secondary/50 text-accent transition-all duration-500 hover:bg-accent/10 hover:border-accent/40 hover:shadow-[0_0_15px_-5px_var(--accent)]">
                    <d.icon className="size-5 3xl:size-6" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs 3xl:text-sm tracking-[0.18em] text-muted-foreground uppercase">
                      {d.label}
                    </span>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="block truncate text-sm sm:text-base 3xl:text-lg font-medium hover:text-accent"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span className="block truncate text-sm sm:text-base 3xl:text-lg font-medium">
                        {d.value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
              <li className="border-t border-border pt-5">
                <span className="text-xs 3xl:text-sm tracking-[0.18em] text-muted-foreground uppercase">
                  Social Media
                </span>
                <div className="mt-3 flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href="#contact"
                      aria-label={s.label}
                      className="grid size-10 3xl:size-12 place-items-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-all duration-500 hover:-translate-y-1.5 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_20px_-5px_var(--accent)] hover:scale-110"
                    >
                      <s.icon className="size-4 3xl:size-5" aria-hidden />
                    </a>
                  ))}
                </div>
              </li>
            </ul>

            <div className="glass-panel overflow-hidden rounded-3xl">
              <iframe
                title="Pragiso Soft Technologies location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=68.0%2C6.5%2C97.5%2C35.7&layer=mapnik"
                loading="lazy"
                className="h-64 sm:h-72 3xl:h-80 w-full border-0 opacity-90"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
