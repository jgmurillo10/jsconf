import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '50vw',
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

function MyComponent({ markers }: { markers: Place[] }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDPn5C1pGETxBRw3-4yscTd_a812hRYN1c",
  })

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [info, setInfo] = React.useState<Place | null>(null);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    map.setZoom(zoom);

    setMap(map);
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
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

  const handleMarker = React.useCallback((id) => {
    const place = markers.find(({place_id}) => place_id === id);
    if (place) {
      setInfo(place);
    }
  }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          {info && <InfoWindow position={{ lat: info.latitude, lng: info.longitude }} onCloseClick={() => setInfo(null)} onUnmount={() => setInfo(null)}>
            <div style={divStyle}>
              <h1>{info.title}</h1>
            </div>
          </InfoWindow>}
          {markers.map(({place_id, latitude, longitude}) => <Marker onClick={() => handleMarker(place_id)} key={place_id} position={{lat: latitude, lng: longitude}} />)}
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)