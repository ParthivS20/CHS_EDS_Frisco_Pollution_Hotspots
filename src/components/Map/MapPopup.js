import React, { useEffect } from "react";
import { Popup } from "react-map-gl";

import "./map.css";

export default function MapPopup(props) {
  return (
    <Popup
      latitude={props.location.latitude}
      longitude={props.location.longitude}
      anchor="top"
      onClose={() => {
        props.closePopup();
      }}
      onOpen={() => {
        props.openPopup(props.location);
      }}
      closeOnClick={false}
    >
      {props.location.name}
    </Popup>
  );
}
