// src/utils/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Your Supabase project URL and anonymous API key
const SUPABASE_URL = 'https://fpsnonfhicfnracxfksf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwc25vbmZoaWNmbnJhY3hma3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MzcxNTUsImV4cCI6MjA1MTQxMzE1NX0.Smy78FAX4A5XpWGGw6-N9dwnGD4xMCsllMQ0rWtcqVg';

// Initialize Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
