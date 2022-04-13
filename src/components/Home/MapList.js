import React from "react";

export default function MapList({ locations }) {
    return (
        <div className="map-list-container">
            {locations.map(l => {
                return <p>{l.name}</p>
            })}
        </div>
    );
}
