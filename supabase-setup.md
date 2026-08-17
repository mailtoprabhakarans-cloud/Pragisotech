# Supabase Database & Email Setup Guide

This guide explains how to set up your Supabase project so that inquiry forms submitted on your website are stored in your database and forwarded directly to your email (**`pragisosofts@gmail.com`**).

---

## 1. Environment Variables Configuration

Create a `.env` file in your project root (or copy from `.env.example`):

```env
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

> **Where to find these keys in Supabase:**
> 1. Go to your [Supabase Dashboard](https://supabase.com/dashboard).
> 2. Open your project.
> 3. Go to **Project Settings** > **API**.
> 4. Copy **Project URL** and `anon` `public` key into your `.env` file.

---

## 2. Database Table Creation (SQL Editor)

1. Open your Supabase Dashboard and click on **SQL Editor**.
2. Click **New Query**, paste the following SQL script, and click **Run**:

```sql
-- Create the inquiries table
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now() not null,
  name text not null,
  email text not null,
  phone text,
  company text,
  service text,
  details text not null
);

-- Enable Row Level Security (RLS)
alter table public.inquiries enable row level security;

-- Policy: Allow anonymous visitors to submit contact inquiries
create policy "Allow public contact form submissions"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);

-- Policy: Only authenticated admin users can view inquiries
create policy "Allow admins to view inquiries"
  on public.inquiries
  for select
  to authenticated
  using (true);
```

---

## 3. Email Notification Setup (2 Easy Options)

To automatically receive an email at **`pragisosofts@gmail.com`** whenever a new inquiry is submitted:

### Option A: Supabase Database Webhook + Resend (Recommended & Easiest)

1. **Get a free Resend API key**:
   - Sign up at [Resend.com](https://resend.com) (Free tier gives 3,000 emails/month).
   - Create an API key.

2. **Create a Supabase Edge Function**:
   In your terminal or Supabase CLI, deploy an Edge Function:
   ```bash
   supabase functions new send-inquiry-email
   ```

   Paste the following code into `supabase/functions/send-inquiry-email/index.ts`:

   ```typescript
   const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

   Deno.serve(async (req) => {
     const payload = await req.json();
     const record = payload.record;


     const res = await fetch("https://api.resend.com/emails", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${RESEND_API_KEY}`,
       },
       body: JSON.stringify({
         from: "Pragiso Inquiries <onboarding@resend.dev>",
         to: ["pragisosofts@gmail.com"],
         subject: `New Project Inquiry from ${record.name} (${record.service || "General"})`,
         html: `
           <h2>New Project Inquiry</h2>
           <p><strong>Name:</strong> ${record.name}</p>
           <p><strong>Email:</strong> ${record.email}</p>
           <p><strong>Phone:</strong> ${record.phone || "N/A"}</p>
           <p><strong>Company:</strong> ${record.company || "N/A"}</p>
           <p><strong>Service:</strong> ${record.service || "General Inquiry"}</p>
           <p><strong>Details:</strong></p>
           <blockquote style="background:#f4f4f4; padding:10px; border-left:4px solid #0066cc;">
             ${record.details}
           </blockquote>
         `,
       }),
     });

     const data = await res.json();
     return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
   });
   ```

3. **Set Up Database Webhook**:
   - Go to **Supabase Dashboard** > **Integrations** > **Webhooks** (or **Database** > **Webhooks**).
   - Create a webhook triggered on `INSERT` to table `public.inquiries`.
   - Set the URL to your deployed Edge Function URL.

---

### Option B: Supabase Dashboard Email Alerts

Alternatively, you can view all submissions live inside the Supabase Dashboard:
- Go to **Table Editor** > `inquiries` table to see, search, and export all project inquiries submitted by clients.
