'use client';

import { useState } from "react";

export default function Basic() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = { query };
      const response = await fetch('/api/chat-basic/', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const { messages } = await response.json();
      const { message } = messages.choices[0];
      const reply = message.content;
      setResponse(reply);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl mb-2">Basic</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="text-black" value={query} onChange={(e) => setQuery(e.target.value)} />
        <hr />
        <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-blue-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 rounded p-2 my-2" />
      </form>
      {response && <p>{response}</p>}
    </main>
  )
}
