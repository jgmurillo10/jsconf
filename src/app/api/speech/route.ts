import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

export const runtime = 'edge';
export const maxDuration = 300;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: query,
  });

  const buffer = await mp3.arrayBuffer();

  return new NextResponse(buffer, { status: 200, statusText: "OK" });
}