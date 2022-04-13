import React from "react";
import { Marker } from "react-map-gl";

import "./map.css";

export default function MapMarker({ location, openPopup }) {
  return (
    <div className="map-pin-container">
      <Marker
        key={location.name}
        latitude={location.latitude}
        longitude={location.longitude}
        anchor="bottom"
        style={{cursor: "pointer"}}
        onClick={() => openPopup(location)}
      />
    </div>
  );
}
