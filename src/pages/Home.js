import React, {useEffect, useState} from "react";

import Title from "../components/Title";
import Map from "../components/Home/Map";

import {request} from "../lib/Api";
import "../App.css";
import MapList from "../components/Home/MapList";

export default function Home(props) {
    const defaultMapView = {
        latitude: 33.1499819,
        longitude: -96.8340679,
        zoom: 11.45
    };

    const [loaded, setLoaded] = useState(false);
    const [locations, setLocations] = useState(null);
    const [mapView, setMapView] = useState(defaultMapView);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setLoaded(false);
        request("cleanup-locations")
            .then((response) => {
                setTimeout(() => {
                    setLoaded(true);
                }, 800)
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setLocations(data);
            })
            .catch((error) => {
                setTimeout(() => {
                    setLoaded(true);
                }, 800)
                console.error(error);
            });
    }, []);

    return (
        <div className={"home-page"}>
            <Title title={props.title}/>
            <Map loaded={loaded} locations={locations} mapView={mapView} setMapView={setMapView}
                 defaultViewState={defaultMapView} selected={selected} setSelected={setSelected}/>
            <MapList loaded={loaded} locations={locations} setMapView={setMapView} setSelected={setSelected}/>
        </div>
    );
}
