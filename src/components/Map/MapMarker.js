import React from "react";
import { Marker } from "react-map-gl";

import mapPin from "./mapPin.png";
import "./map.css";

export default function MapMarker(props) {
  return (
    <div className="map-pin-container">
      <Marker
        key={props.location.name}
        latitude={props.location.latitude}
        longitude={props.location.longitude}
        anchor="bottom"
        style={{ cursor: "pointer" }}
        onClick={() => props.openPopup(props.location)}
      ></Marker>
    </div>
  );
}
