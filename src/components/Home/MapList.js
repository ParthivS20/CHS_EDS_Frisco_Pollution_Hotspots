import React from "react";

export default function MapList({ loaded, locations }) {
    return (
        <div className="map-list-container">
            {loaded && locations.map(l => {
                return <p>{l.name}</p>
            })}
        </div>
    );
}
