import React, {useCallback, useEffect, useRef, useState} from "react";

import Title from "../lib/Title";
import Map from "../components/Home/Map";
import MapList from "../components/Home/MapList";
import {request} from "../lib/Api";

import "../App.css";

export default function Home({mapLocations, setMapLocations, mapMode, setMapMode, mapViewState, setMapViewState, selectedLocation, setSelectedLocation}) {
    const [loaded, setLoaded] = useState(true);
    const [mapCenter, setMapCenter] = useState();
    const mapRef = useRef(null);

    const updateView = useCallback((longitude, latitude, zoom) => {
        const getDistance = () => {
            let lon1 = longitude * Math.PI / 180;
            let lon2 = mapCenter[0] * Math.PI / 180;
            let lat1 = latitude * Math.PI / 180;
            let lat2 = mapCenter[1] * Math.PI / 180;

            // Haversine formula
            let dlon = lon2 - lon1;
            let dlat = lat2 - lat1;
            let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

            let c = 2 * Math.asin(Math.sqrt(a));

            // Radius of earth in kilometers. Use 3956
            // for miles
            let r = 6371;

            // calculate the result
            return (c * r);
        }

        const timeScaler = () => {
            let distance = getDistance();
            if (distance < 2000) return 1500 + distance * 4 / 3.8;
            if (distance < 10000) return 1500 + distance / 2.5;
            return 1500 + distance / 6;
        }

        setSelectedLocation(null);
        mapRef.current?.flyTo({center: [longitude, latitude], zoom: zoom ? zoom : 11.45, duration: timeScaler()});
        getDistance()
    }, [mapCenter, setSelectedLocation]);

    useEffect(() => {
        if(mapLocations) {
            setLoaded(true);
            return;
        }

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
                setMapLocations(data);
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
            <Title />
            <Map loaded={loaded} mapLocations={mapLocations}
                 selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} mapRef={mapRef} updateView={updateView}
                 setMapCenter={setMapCenter} mapMode={mapMode} setMapMode={setMapMode} mapViewState={mapViewState} setMapViewState={setMapViewState}/>
            <MapList loaded={loaded} mapLocations={mapLocations} setSelectedLocation={setSelectedLocation} updateView={updateView}/>
        </div>
    );
}
