import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const reqFormData = await request.formData();
  const file = reqFormData.get('file') as File;
  const transcription = await openai.audio.transcriptions.create({file, model: "whisper-1" });

  return NextResponse.json({ data: transcription }, { status: 200 })
}
