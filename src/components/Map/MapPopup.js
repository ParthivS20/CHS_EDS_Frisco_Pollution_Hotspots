import React, { useEffect } from "react";
import { Popup } from "react-map-gl";

import "./map.css";

export default function MapPopup(props) {
  useEffect(() => {
    console.log(props.location);
  }, [props]);
  return (
    <Popup
      latitude={props.location.latitude}
      longitude={props.location.longitude}
      anchor="bottom"
    >
      <div>
        <h4>{props.location.name}</h4>
        <p>{props.location.latitude + ", " + props.location.longitude}</p>
      </div>
    </Popup>
  );
}
