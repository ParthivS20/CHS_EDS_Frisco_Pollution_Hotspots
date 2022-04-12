import React from "react";
import { Popup } from "react-map-gl";

import "./map.css"

export default function MapPopup(props) {
    return (
        <Popup
            latitude={props.location.latitude}
            longitude={props.location.longitude}

            anchor="bottom"
        >
            <div>
                <h4>{props.location.name}</h4>
                <p>
                    {props.location.latitude +
                        ", " +
                        props.location.longitude}
                </p>
            </div>
        </Popup>
    )
}
