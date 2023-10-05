import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import module from "./Map.module.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  if (!isLoaded) return <div>....Loading</div>;
  return (
    <div id={module.MapWrapper}>
      <label id={module.ourPartnersLabel}>OUR PARTNERS</label>
      <GoogleMap
        zoom={2}
        center={{ lat: 26.8206, lng: 30.8025 }}
        mapContainerClassName={module.Container}
      >
        <Marker position={{ lat: 30, lng: 30 }}></Marker>
      </GoogleMap>
    </div>
  );
};

export default Map;
