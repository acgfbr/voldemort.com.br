'use server';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getVisitCount() {
  try {
    const { data: currentData, error: fetchError } = await supabase
      .from('visits')
      .select('count')
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error fetching count:', fetchError);
      return null;
    }

    const currentCount = currentData?.count || 0;
    const newCount = currentCount + 1;

    const { error: updateError } = await supabase
      .from('visits')
      .upsert({ id: 1, count: newCount });

    if (updateError) {
      console.error('Error updating count:', updateError);
      return null;
    }

    return newCount;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
} 