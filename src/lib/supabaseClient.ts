
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://jzajrkzmkmjwicornbmi.supabase.co"; // replace with your real URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // store key in .env

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
 export default supabase; 