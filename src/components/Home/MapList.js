import React from "react";

import "./map-list.css"

export default function MapList({ loaded, locations }) {
    return (
        <div className="map-list-container">
            <div className={'map-list-title'}>
                <h1>Locations</h1>
            </div>
            <div className={'map-list-bar'} />
            <div className={'location-list'}>
                {loaded && locations.map(l => {
                    return (
                        <div className={'list-location'}>
                            <h2>{l.name}</h2>
                            <p>{`${l.latitude}, ${l.longitude}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
