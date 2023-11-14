import { NextRequest, NextResponse } from "next/server";

const weather_function_definition = {
  name: 'fetch_weather',
  description: 'Please fetch a weather for a city',
  parameters: {
    type: 'object',
    properties: {
      city: {
        type: 'string',
        description: 'City to fetch weather for',
      },
      latitude: {
        type: 'number',
        description: 'Latitude of the city to fetch weather for',
      },
      longitude: {
        type: 'number',
        description: 'Longitude of the city to fetch weather for',
      },
    },
    required: ['city', 'latitude', 'longitude'],
  },
};

const fetch_weather = async ({city, latitude, longitude}: {city: string; latitude: number; longitude: number }) => {
  console.log('>>> Third party API with:', {city, latitude, longitude});
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;

  try {
    const response = await fetch(weatherUrl);
    const parsed = await response.json();

    return {
      temperature: parsed.main.temp - 273.15,
    };
  } catch (e) {
    console.error(e);
    // fallback
    return {
      temperature: 31,
    }
  }
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
        function: weather_function_definition,
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
            function: weather_function_definition,
          }
        ]
      };
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });
      const parsed = await response.json();
      return NextResponse.json({ messages: parsed }, { status: 200 });
    }
  } else {
    return NextResponse.json({ messages: parsed }, { status: 200 })
  }

}