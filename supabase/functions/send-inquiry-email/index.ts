const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // CORS Preflight Handling
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY environment variable is not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const payload = await req.json();
    // Database Webhook payloads send the inserted row inside payload.record
    const record = payload.record || payload;

    if (!record || !record.email) {
      return new Response(
        JSON.stringify({ error: "No valid record or email found in payload" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Call Resend REST API to send email to pragisosofts@gmail.com
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Pragiso Inquiries <onboarding@resend.dev>",
        to: ["pragisosofts@gmail.com"],
        reply_to: record.email,
        subject: `New Project Inquiry from ${record.name || "Client"} (${record.service || "General"})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
            <div style="background-color: #0f172a; color: #ffffff; padding: 24px; text-align: center;">
              <h2 style="margin: 0; font-size: 20px;">New Project Inquiry</h2>
              <p style="margin: 6px 0 0 0; color: #94a3b8; font-size: 14px;">Pragiso Soft Technologies Website</p>
            </div>
            <div style="padding: 24px; color: #334155; font-size: 15px; line-height: 1.6;">
              <p style="margin-top: 0;"><strong>Client Name:</strong> ${record.name || "N/A"}</p>
              <p><strong>Email Address:</strong> <a href="mailto:${record.email}" style="color: #0284c7; text-decoration: none;">${record.email}</a></p>
              <p><strong>Phone Number:</strong> ${record.phone || "Not provided"}</p>
              <p><strong>Company:</strong> ${record.company || "Not provided"}</p>
              <p><strong>Required Service:</strong> ${record.service || "General Inquiry"}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <p style="margin-bottom: 8px;"><strong>Project Details:</strong></p>
              <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #0284c7; border-radius: 6px; white-space: pre-wrap; font-size: 14px; color: #1e293b;">
${record.details || "No details provided."}
              </div>
            </div>
            <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
              Submitted at ${record.created_at ? new Date(record.created_at).toLocaleString() : new Date().toLocaleString()}
            </div>
          </div>
        `,
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
