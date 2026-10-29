import { useState, type FormEvent } from "react";
import {
  Calendar,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  Send,
  Loader2,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
  Building,
  ExternalLink,
} from "lucide-react";
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
import { crmDemoPlan, LIVE_CRM_DEMO_URL } from "@/data/pragiso-crm";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export function CrmSevenDayDemo() {
  const [activeDay, setActiveDay] = useState(0);
  const currentPlan = crmDemoPlan[activeDay] ?? crmDemoPlan[0]!;
  const [teamSize, setTeamSize] = useState("5-20");
  const [industry, setIndustry] = useState("HVAC & Cooling");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const notes = (formData.get("notes") as string) || "";

    if (!name || !email || !phone) {
      toast.error("Please fill in required contact fields.");
      return;
    }

    setIsSubmitting(true);

    const inquiryDetails = `[PRAGISO CRM 7-DAY DEMO REQUEST]
Company: ${company}
Team Size: ${teamSize} field technicians
Industry: ${industry}
Notes: ${notes}
Requested via Website 7-Day Demo Form.`;

    try {
      if (!isSupabaseConfigured()) {
        toast.success("7-Day Demo Request Received!", {
          description: `Thank you ${name}! Our enterprise onboarding team will contact you shortly at ${phone} / ${email}.`,
        });
      } else {
        const { error } = await supabase.from("inquiries").insert([
          {
            name,
            email,
            phone,
            company,
            service: "Pragiso CRM - 7-Day Free Demo",
            details: inquiryDetails,
          },
        ]);

        if (error) throw error;

        toast.success("7-Day Demo Reserved Successfully!", {
          description: `Our team will set up your dedicated workspace and contact you at ${email}.`,
        });
      }

      setIsSuccess(true);
      form.reset();
    } catch (err: any) {
      console.error("Failed to submit demo request:", err);
      toast.error("Could not register demo request", {
        description: err?.message || "Please contact +91-90809-61649 directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo-section" className="relative py-24 md:py-32 overflow-hidden scroll-mt-20">
      {/* Background Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[40rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="7-Day Live Demo"
          title="Experience Pragiso CRM in Your Business"
          subtitle="Deploy Pragiso CRM risk-free for 7 full days with real field engineers, live GPS tracking, and complete enterprise access."
        />

        {/* 7-Day Demo Perks Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-1.5 text-emerald-300">
            <CheckCircle2 className="size-4 text-emerald-400" />
            <span>100% Free for 7 Days</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-cyan">
            <Clock className="size-4 text-cyan" />
            <span>20-Minute Guided Onboarding</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-electric/30 bg-electric/10 px-3.5 py-1.5 text-electric">
            <ShieldCheck className="size-4 text-electric" />
            <span>No Credit Card or Commitment</span>
          </div>
        </div>

        {/* Live Instant Demo Unit Direct Access Banner */}
        <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-cyan/40 bg-gradient-to-r from-cyan/15 via-royal/15 to-teal/15 p-4 sm:p-5 text-center shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                Live Demo Unit Online
              </span>
              <p className="mt-1.5 text-sm font-bold text-foreground">
                Want immediate hands-on access right now?
              </p>
              <p className="text-xs text-muted-foreground">
                Test the live interactive control room without waiting: <span className="font-mono text-cyan">demo-crm-xi.vercel.app</span>
              </p>
            </div>
            <a
              href={LIVE_CRM_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:scale-105 inline-flex items-center gap-2"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              <span>Open Live Demo</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Interactive 7-Day Roadmap (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Calendar className="size-5 text-accent" />
                The 7-Day Demo Roadmap
              </h3>
              <span className="text-xs text-muted-foreground font-mono">
                Click any day to view deliverables
              </span>
            </div>

            {/* Day Selector Buttons */}
            <div className="grid grid-cols-7 gap-1.5">
              {crmDemoPlan.map((plan, i) => (
                <button
                  key={plan.day}
                  type="button"
                  onClick={() => setActiveDay(i)}
                  className={`cursor-pointer rounded-xl py-2 px-1 text-center transition-all ${
                    activeDay === i
                      ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
                      : "bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground text-xs"
                  }`}
                >
                  <p className="text-xs font-bold">{plan.day}</p>
                </button>
              ))}
            </div>

            {/* Active Day Card */}
            <div className="card-shine glass-panel overflow-hidden rounded-3xl border border-border/80 p-6 md:p-8 shadow-[var(--shadow-elegant)]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-4">
                <div>
                  <span className="rounded-full bg-accent/20 px-2.5 py-1 text-xs font-bold text-cyan">
                    {currentPlan.day} Focus
                  </span>
                  <h4 className="mt-2 text-xl font-bold text-foreground">
                    {currentPlan.title}
                  </h4>
                </div>
                <span className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-semibold text-accent">
                  {currentPlan.badge}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {currentPlan.description}
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Expected Day {activeDay + 1} Deliverables:
                </p>
                <ul className="mt-3 space-y-2">
                  {currentPlan.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal">
                        <CheckCircle2 className="size-3" />
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step progression helpers */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-border/50 text-xs">
                <button
                  type="button"
                  disabled={activeDay === 0}
                  onClick={() => setActiveDay((prev) => Math.max(0, prev - 1))}
                  className="font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:text-muted-foreground"
                >
                  ← Previous Day
                </button>
                <span className="text-muted-foreground font-mono">
                  Day {activeDay + 1} of 7
                </span>
                <button
                  type="button"
                  disabled={activeDay === 6}
                  onClick={() => setActiveDay((prev) => Math.min(6, prev + 1))}
                  className="font-semibold text-accent hover:underline disabled:opacity-30"
                >
                  Next Day →
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Prefer WhatsApp Setup?</p>
                  <p className="text-xs text-muted-foreground">Message our deployment engineers directly for instant activation.</p>
                </div>
              </div>
              <a
                href="https://wa.me/919080961649?text=Hi%20Pragiso%20Team%2C%20I%20want%20to%20start%20the%207-day%20demo%20of%20Pragiso%20CRM%20for%20my%20company."
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Demo Registration Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="card-shine glass-panel glow-border relative overflow-hidden rounded-3xl border border-accent/40 p-6 sm:p-8 shadow-[var(--shadow-glow)]">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <Sparkles className="size-4" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Reserve Your 7-Day Demo
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Instant setup for your field team
                  </p>
                </div>
              </div>

              {isSuccess ? (
                <div className="mt-8 text-center py-8">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">Demo Request Received!</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Our technical deployment team will reach out within 2 business hours to configure your test workspace and dispatch engineer credentials.
                  </p>
                  <Button
                    variant="glass"
                    size="sm"
                    className="mt-6 rounded-full"
                    onClick={() => setIsSuccess(false)}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <Label htmlFor="demo-name" className="text-xs text-foreground font-semibold">
                      Your Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="demo-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Rajesh Kumar"
                      className="mt-1.5 text-xs bg-secondary/50 border-border"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="demo-email" className="text-xs text-foreground font-semibold">
                        Business Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="demo-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="rajesh@company.com"
                        className="mt-1.5 text-xs bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="demo-phone" className="text-xs text-foreground font-semibold">
                        Phone / WhatsApp <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="demo-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91-90809-61649"
                        className="mt-1.5 text-xs bg-secondary/50 border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="demo-company" className="text-xs text-foreground font-semibold">
                      Company / Organization Name
                    </Label>
                    <Input
                      id="demo-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Apex Engineering Services"
                      className="mt-1.5 text-xs bg-secondary/50 border-border"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="demo-team-size" className="text-xs text-foreground font-semibold">
                        Field Team Size
                      </Label>
                      <Select value={teamSize} onValueChange={setTeamSize}>
                        <SelectTrigger id="demo-team-size" className="mt-1.5 text-xs bg-secondary/50 border-border">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1 - 5 Technicians</SelectItem>
                          <SelectItem value="5-20">5 - 20 Technicians</SelectItem>
                          <SelectItem value="20-50">20 - 50 Technicians</SelectItem>
                          <SelectItem value="50+">50+ Technicians (Enterprise)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="demo-industry" className="text-xs text-foreground font-semibold">
                        Primary Industry
                      </Label>
                      <Select value={industry} onValueChange={setIndustry}>
                        <SelectTrigger id="demo-industry" className="mt-1.5 text-xs bg-secondary/50 border-border">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="HVAC & Cooling">HVAC & Cooling</SelectItem>
                          <SelectItem value="Electrical & Machinery">Electrical & Machinery</SelectItem>
                          <SelectItem value="Elevators & Escalators">Elevators & Escalators</SelectItem>
                          <SelectItem value="Telecom & Networks">Telecom & Networks</SelectItem>
                          <SelectItem value="Medical Equipment">Medical Equipment</SelectItem>
                          <SelectItem value="Home Appliances">Home Appliances</SelectItem>
                          <SelectItem value="Fire & Safety">Fire & Safety</SelectItem>
                          <SelectItem value="Other Field Services">Other Field Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="demo-notes" className="text-xs text-foreground font-semibold">
                      Specific Requirements or Current Challenges
                    </Label>
                    <Textarea
                      id="demo-notes"
                      name="notes"
                      rows={2}
                      placeholder="e.g. Need GPS kilometer audit and instant client PDF signoffs..."
                      className="mt-1.5 text-xs bg-secondary/50 border-border"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-xl mt-2 text-sm font-bold shadow-[var(--shadow-glow)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin mr-2" />
                        Configuring Demo Setup...
                      </>
                    ) : (
                      <>
                        Start My 7-Day Free Demo <ArrowRight className="size-4 ml-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[10px] text-muted-foreground mt-2">
                    🔒 Confidential. No credit card required. Instant 7-day cloud sandbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
