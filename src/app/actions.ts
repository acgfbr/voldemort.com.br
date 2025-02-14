'use server';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getVisitCount() {
  try {
    // Use a more atomic update approach with SQL
    const { data, error } = await supabase.rpc('increment_visits');
    
    if (error) {
      console.error('Error incrementing visits:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
} 