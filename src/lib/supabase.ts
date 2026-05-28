import { createClient } from '@supabase/supabase-js';

// Safe extraction of environment variables with fallback placeholder to prevent module load crash
const rawUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
const rawKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;

const isValidUrl = (url: string | undefined | null): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch (e) {
    return false;
  }
};

const supabaseUrl = isValidUrl(rawUrl) ? rawUrl! : 'https://fuhbramyrllpmrlumqoc.supabase.co';
const supabaseAnonKey = (rawKey && rawKey.trim() !== '') ? rawKey : 'sb_publishable_YU7zA1BvP_YYc7DkH2VS-Q_c_5Gm3JB';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

