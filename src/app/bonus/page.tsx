'use client';

import { useEffect, useState } from "react";
// import cx from "classnames"
// import ChatBubble from "@/components/ChatBubble";
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const speechToText = async (blob: any) => {
  const formData = new FormData();
  formData.append('file', blob, 'audio.wav');
  const response = await fetch('/api/transcribe', {
    method: 'POST',
    body: formData,
  });
  return await response.json();
}

export default function Basic() {
  const [loading, setLoading] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const {
    startRecording,
    stopRecording,
    recordingBlob,
    isRecording,
  } = useAudioRecorder();

  useEffect(() => {
    if (!recordingBlob) return;
    processSpeech();
  }, [recordingBlob])

  const chat = async (text: string) => {
    const data = { query: text };
    const response = await fetch('/api/chat-basic/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const { messages } = await response.json();
    const { message } = messages.choices[0];

    return message;
  }

  const textToSpeech = async (text: string) => {
    const response = await fetch('/api/speech', {
      method: 'POST',
      body: JSON.stringify({ query: text }),
    });

    return await response.blob();
  }

  const processSpeech = async () => {
    setLoading(true);
    const { data } = await speechToText(recordingBlob);
    const message = await chat(data.text);
    const blob = await textToSpeech(message.content);
    
    try {
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      // setAudio(audio);
      audio.play();
      setSpeaking(true);

      audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        audio.pause();
        setSpeaking(false);
      });
    } catch (e) {
      console.log('>>>', {e});
    } finally {
      setLoading(false);
    }
  }

  const styles = isRecording || speaking ? 'bg-black' : 'bg-white';

  return (
    <main className={`w-screen h-screen flex justify-center items-center ${styles}`}>
      {isRecording ? (
        <button className="bg-slate-600 rounded-full w-64 h-64 animate-pulse" onClick={stopRecording}>Listening</button>
      ) : speaking ? (
        <button className="bg-slate-600 rounded-full w-64 h-64 animate-pulse">Speaking</button>
      ) : loading ? (
        <button className="bg-slate-300 rounded-full w-64 h-64 text-black animate-pulse">Thinking</button>
      ) : (
        <button className="bg-slate-300 rounded-full w-64 h-64 text-black" onClick={startRecording}>
          Click to speak
        </button>
      )}
    </main>
  )
}
