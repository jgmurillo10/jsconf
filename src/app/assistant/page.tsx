"use client"
import Chat from '@/components/Chat'
import GoogleMap from '@/components/GoogleMap'
import MapOverlay from '@/components/MapOverlay'
import { useState } from 'react'
import type { Place } from '@/components/GoogleMap'

export default function Home() {
  const [selectedBusiness, setSelectedBusiness] = useState<Place | null>()
  const [coordinates, setCoordinates] = useState<Place[]>([]);
  
  const handleAction = (action: string, args: { markers: Place[] }) => {
    if (action === "addMapMarkers") {
      console.log('>>> action', {action})
      setCoordinates(args?.markers);
    } else if (action === "addBusinessMapMarkers") {
      console.log('>>> action', {action})
      setCoordinates(args?.markers);
    }
  }

  return (
    <main>
      <header className='h-[50px] flex justify-center items-center gap-2'>
        <h1 className='text-lg'>🧭 Wander</h1>
      </header>
      <div className='flex h-[calc(100vh-50px)]'>
        <div className='relative flex-shrink-0 w-1/2 px-6 pb-6'>
          <GoogleMap markers={coordinates} setSelected={setSelectedBusiness} />
          {selectedBusiness && <MapOverlay place={selectedBusiness} onClose={() => setSelectedBusiness(null)} />}
        </div>
        <Chat className='w-1/2' onAction={handleAction} />
      </div>
    </main>
  )
}
