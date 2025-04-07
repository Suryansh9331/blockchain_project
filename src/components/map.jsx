import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 20.5937, 
};


const markers = [
  { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
  { lat: 51.5074, lng: -0.1278, title: "London" },
  { lat: 35.6762, lng: 139.6503, title: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, title: "Sydney" },
  { lat: 40.7128, lng: -74.006, title: "New York" },
];

export default function MovableMap() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
        options={{
          disableDefaultUI: false, 
          draggable: true,
        }}
      >
        {/* Add Markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
