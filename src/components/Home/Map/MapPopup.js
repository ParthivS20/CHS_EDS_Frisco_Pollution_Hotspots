import React from "react";
import { Popup } from "react-map-gl";

import "./map.css";

export default function MapPopup({ location, closePopup, openPopup }) {
  return (
    <Popup
      latitude={location.latitude}
      longitude={location.longitude}
      anchor="top"
      onClose={() => {
        closePopup();
      }}
      onOpen={() => {
        openPopup(location);
      }}
      closeOnClick={true}
      closeOnMove={true}
    >
      {location.name}
    </Popup>
  );
}
