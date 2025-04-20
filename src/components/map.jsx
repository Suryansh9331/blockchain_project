import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: 20.5937,
  lng: 78.9629,
};

const markers = [
  { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
  { lat: 51.5074, lng: -0.1278, title: "London" },
  { lat: 35.6762, lng: 139.6503, title: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, title: "Sydney" },
  { lat: 40.7128, lng: -74.006, title: "New York" },
];

export default function MovableMap() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watcher = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );

      // Cleanup watcher on unmount
      return () => navigator.geolocation.clearWatch(watcher);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || defaultCenter}
        zoom={currentLocation ? 12 : 2}
        options={{
          disableDefaultUI: false,
          draggable: true,
        }}
      >
        {/* Static Markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
        ))}

        {/* Live Location Marker */}
        {currentLocation && (
          <Marker
            position={currentLocation}
            title="You are here"
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
