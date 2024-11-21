import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing environment variables');
  throw new Error('Please define the Supabase environment variables in your .env file');
}

// Ensure URL is properly formatted
const formattedUrl = supabaseUrl.startsWith('http') ? supabaseUrl : `https://${supabaseUrl}`;

export const supabase = createClient(formattedUrl, supabaseAnonKey);