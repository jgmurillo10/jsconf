'use client';

import { useState } from "react";
import cx from "classnames"
import ChatBubble from "@/components/ChatBubble";

export default function Basic() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await getMessage();
  }
  const getMessage = async () => {
    setLoading(true);
    try {
      const data = { query };
      setQuery("");
      const response = await fetch('/api/chat-basic/', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const { messages } = await response.json();
      const { message } = messages.choices[0];
      setResponse([{text: { value: message.content } }] as any);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const adjustTextAreaHeight = () => {
    setTimeout(() => {
      const element = document.querySelector("#typing-area") as HTMLElement;
      if (element) {
        element.style.height = "auto";
        element.style.height = `${element.scrollHeight}px`;
      }
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl mb-2">Basic</h1>
      <div className={`flex flex-col justify-between gap-5 pb-6 w-full h-full overflow-hidden`}>
        <div id="chatbox" className="overflow-scroll flex flex-col-reverse px-4 gap-2">
          {loading ? <ChatBubble role="assistant" type="thinking" /> : response ? <ChatBubble role="assistant" content={response} /> : null}
        </div>
        <div className="mx-4 shadow shadow-primary rounded-lg">
          <form onSubmit={handleSubmit} className="flex">
            <textarea
                id="typing-area"
                onInput={adjustTextAreaHeight}
                onKeyDown={(e) => {
                  if (e.key == "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    getMessage();
                  }
                }}
                rows={1}
                className="flex-grow px-4 py-4 text-on-container h-[56px] max-h-[200px] bg-transparent outline-none resize-none text-white"
                placeholder="Send a message"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center px-3">
                <button type="submit" className={cx('flex justify-center items-center rounded w-[35px] h-[35px] transition-all ease-in-out', { 'bg-primary': query && !loading })} disabled={loading || !query}>
                  <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={(query && !loading) ? "#fff" : "#9ca3af"} d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"/></svg>
                </button>
              </div>
          </form>
        </div>
      </div>
    </main>
  )
}
