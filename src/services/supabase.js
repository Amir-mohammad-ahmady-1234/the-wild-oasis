import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wgqaxfpaldrfcxryorzw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndncWF4ZnBhbGRyZmN4cnlvcnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwOTcwMjQsImV4cCI6MjA2MTY3MzAyNH0.76iCMqKf4LydrUWDAP8HkqJ2hBN4PrS4iR00q10XaUA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
