import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env['VITE_SUPABASE_URL'] || "";
const supabaseAnonKey =
  import.meta.env['VITE_SUPABASE_ANON_KEY'] ||
  import.meta.env['VITE_SUPABASE_PUBLISHABLE_KEY'] ||
  "";

export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl &&
      supabaseAnonKey &&
      supabaseUrl !== "https://your-project-ref.supabase.co" &&
      supabaseAnonKey !== "your-anon-key-here"
  );
};

// Fallback to placeholder if env vars not provided yet to avoid runtime error during app startup
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key"
);
