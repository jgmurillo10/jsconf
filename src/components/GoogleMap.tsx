import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  height: '80vh'
};

const center = {
  lat: 6.202860991105234,
  lng: -75.5614369417018,
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

const zoom = 15;

export type Place = {
  place_id: string;
  title: string;
  latitude: number;
  longitude: number;
}

function MyComponent({ markers, setSelected }: { markers: Place[]; setSelected: any }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(zoom);

    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null)
  }, [])

  React.useEffect(() => {
    if (markers.length !== 0) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach((marker) => {
        bounds.extend(new window.google.maps.LatLng(marker.latitude, marker.longitude))
      });
      map?.fitBounds(bounds);
    }
  }, [markers]);

  const handleMarker = React.useCallback((id: Place['place_id']) => {
    const place = markers.find(({place_id}) => place_id === id);
    setSelected(place);
  }, [markers]);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          {markers.map(({place_id, latitude, longitude}) => <Marker onClick={() => handleMarker(place_id)} key={place_id} position={{lat: latitude, lng: longitude}} />)}
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)