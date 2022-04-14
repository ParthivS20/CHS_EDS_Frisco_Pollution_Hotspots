import React from "react";

import "./map-list.css"

export default function MapList({ loaded, locations, setMapView, setSelected }) {
    return (
        <div className="map-list-container">
            <div className={'map-list-title'}>
                <h1>Locations</h1>
            </div>
            <div className={'map-list-bar'} />
            <div className={'location-list'}>
                {loaded && locations && locations.map((l, i)=> {
                    return (
                        <div className={'list-location'} key={i} onClick={() => {
                            setMapView({
                                latitude: l.latitude,
                                longitude: l.longitude,
                                zoom: 15,
                            })
                            setSelected(l)
                        }}>
                            <h2>{l.name}</h2>
                            <p>{`${l.latitude.toString().substring(0, 10)}, ${l.longitude.toString().substring(0, 11)}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
