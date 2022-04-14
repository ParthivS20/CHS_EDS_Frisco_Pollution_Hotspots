import React, {useCallback, useEffect, useRef, useState} from "react";

import Title from "../components/Title";
import Map from "../components/Home/Map";

import {request} from "../lib/Api";
import "../App.css";
import MapList from "../components/Home/MapList";

export default function Home(props) {
    const [loaded, setLoaded] = useState(false);
    const [locations, setLocations] = useState(null);
    const [selected, setSelected] = useState(null);
    const mapRef = useRef(null);

    const updateView = useCallback((longitude, latitude, zoom) => {
        setSelected(null);
        mapRef.current?.flyTo({center: [longitude, latitude], zoom: zoom ? zoom : 11.45,  duration: 1500});
    }, []);

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
            <Map loaded={loaded} locations={locations}
                 selected={selected} setSelected={setSelected} mapRef={mapRef} updateView={updateView}/>
            <MapList loaded={loaded} locations={locations} setSelected={setSelected} updateView={updateView}/>
        </div>
    );
}
