import React from "react";
import { Marker } from "react-map-gl";

import mapPin from "./mapPin.png"
import "./map.css"

export default function MapMarker(props) {
    return (
        <Marker
            key={props.location.name}
            latitude={props.location.latitude}
            longitude={props.location.longitude}
            offsetTop={-25}
            offsetLeft={-12.5}
        >
            <button
                className="map-pin-btn"
                onClick={e => {
                    e.preventDefault();
                    props.updateSelectedLocation(props.location);
                    console.log(props.location)
                }}
            >
                <img src={mapPin} alt="map-pin" className="map-pin" />
            </button>
        </Marker>
    )

}
