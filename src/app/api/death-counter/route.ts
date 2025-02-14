import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const currentCount = await kv.incr('avada-kedavra-count');
    return NextResponse.json({ count: currentCount });
  } catch (error) {
    console.error('Error accessing death counter:', error);
    return NextResponse.json({ error: 'Failed to update death count' }, { status: 500 });
  }
} 