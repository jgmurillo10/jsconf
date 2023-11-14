import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { query } = await request.json();
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };
    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: query }],
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });
    const messages = await response.json();

    return NextResponse.json({ messages }, { status: 200 })
}