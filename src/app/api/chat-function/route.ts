import { NextRequest, NextResponse } from "next/server";

const fetch_weather = async (params: any) => {
  console.log('>>> Mock third party API with:', {params});

  return {
    temperature: 31,
  };
};

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };
  const data = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: query }],
    tools: [
      {
        type: 'function',
        function: {
          name: 'fetch_weather',
          description: 'Please fetch a weather for a city',
          parameters: {
            type: 'object',
            properties: {
              city: {
                type: 'string',
                description: 'City to fetch weather for',
              }
            },
            required: ['city'],
          }
        }
      }
    ]
  };
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
  const parsed = await response.json();
  const message = parsed.choices[0].message;

  if (message.tool_calls) {
    const [firstCall] = message.tool_calls;
    const function_name = firstCall.function.name;

    if (function_name === 'fetch_weather') {
      const functionArgs = JSON.parse(firstCall.function.arguments);
      const { temperature } = await fetch_weather(functionArgs);

      const data = {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: query },
          { role: 'function', name: 'fetch_weather', content: JSON.stringify({ temperature }) },
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'fetch_weather',
              description: 'Please fetch a weather for a city',
              parameters: {
                type: 'object',
                properties: {
                  city: {
                    type: 'string',
                    description: 'City to fetch weather for',
                  }
                },
                required: ['city'],
              }
            }
          }
        ]
      };
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      const parsed = await response.json();
      // const reply = parsed.choices[0].message.content;
      console.log('>>> wheater', {parsed})
      return NextResponse.json({ messages: parsed }, { status: 200 });
    }
  } else {
    return NextResponse.json({ messages: parsed }, { status: 200 })
  }

}