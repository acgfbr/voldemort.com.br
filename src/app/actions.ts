'use server';

import { kv } from '@vercel/kv';

const COUNTER_KEY = 'voldemort:kill_count';

export async function getVisitCount() {
  try {
    const count = await kv.incr(COUNTER_KEY);
    return count;
  } catch (error) {
    console.error('Error incrementing visits:', error);
    return null;
  }
} 