import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
export async function GET() {
  const tag = 'data'
  revalidateTag(tag)
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
