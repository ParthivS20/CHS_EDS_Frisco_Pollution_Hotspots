import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faLayerGroup} from "@fortawesome/free-solid-svg-icons";

import Loading from "./Loading";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";
import {ClickOutside} from "../../../lib/ClickOutside";

import dark from "./MapImages/dark.png"
import light from "./MapImages/light.png"
import navigationDay from "./MapImages/navigationDay.png"
import navigationNight from "./MapImages/navigationNight.png"
import satellite from "./MapImages/satellite.png"
import streets from "./MapImages/streets.png"

import "./map.css";

export default function Map({
                                loaded,
                                mapLocations,
                                selectedLocation,
                                setSelectedLocation,
                                mapRef,
                                updateView,
                                setMapCenter,
                                mapMode,
                                setMapMode,
                                mapViewState,
                                setMapViewState
                            }) {
    const defaultMapView = {
        latitude: 33.1499819, longitude: -96.8340679, zoom: 11.45
    };

    const [viewMapSelector, setViewMapSelector] = useState(false);
    const [mapSelectorAnimation, setMapSelectorAnimation] = useState('initial');

    const closePopup = useCallback(() => {
        setSelectedLocation(null);
    }, [setSelectedLocation]);

    const openPopup = useCallback((location) => {
        setSelectedLocation(location);
    }, [setSelectedLocation]);

    const closeMapSelector = useCallback(() => {
        setViewMapSelector(false);
        if (mapSelectorAnimation !== 'initial') setMapSelectorAnimation('setInvisible');
    },[mapSelectorAnimation]);

    const toggleMapSelector = useCallback(() => {
        setViewMapSelector(!viewMapSelector);
        if (viewMapSelector) setMapSelectorAnimation('setInvisible'); else setMapSelectorAnimation('setVisible');
    },[viewMapSelector]);

    const mapModeSelector = useRef(null);
    const layerBtn = useRef(null);
    ClickOutside(mapModeSelector, closeMapSelector, [layerBtn])

    useEffect(() => {
        setMapCenter([defaultMapView.longitude, defaultMapView.latitude])
    }, [defaultMapView.latitude, defaultMapView.longitude, setMapCenter])

    const markers = useMemo(() => mapLocations?.map((l) =>
            <MapMarker key={l.name} location={l} openPopup={openPopup}/>
    ), [mapLocations, openPopup]);

    const mapStyles = {
        streets: {
            style: 'mapbox://styles/mapbox/streets-v11', thumbnail: streets, name: 'Map',
        }, light: {
            style: 'mapbox://styles/mapbox/light-v10', thumbnail: light, name: 'Light',
        }, dark: {
            style: 'mapbox://styles/mapbox/dark-v10', thumbnail: dark, name: 'Dark',
        }, satelliteStreets: {
            style: 'mapbox://styles/mapbox/satellite-streets-v11', thumbnail: satellite, name: 'Satellite',
        }, navigationDay: {
            style: 'mapbox://styles/mapbox/navigation-day-v1', thumbnail: navigationDay, name: 'Navigation Day',
        }, navigationNight: {
            style: 'mapbox://styles/mapbox/navigation-night-v1', thumbnail: navigationNight, name: 'Navigation Night',
        }
    }

    return (<div className={"map"}>
        {loaded ? (<div className="map-wrapper">
            <ReactMapGl
                {...mapViewState}
                ref={mapRef}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                style={{
                    width: "68vw", height: "85vh"
                }}
                mapStyle={mapStyles[mapMode].style}
                onMove={evt => {
                    setMapCenter([evt.viewState.longitude, evt.viewState.latitude]);
                    setMapViewState(evt.viewState);
                }}
                reuseMaps={true}
            >
                {mapLocations && markers}
                {selectedLocation && (<MapPopup
                    location={selectedLocation}
                    openPopup={openPopup}
                    closePopup={closePopup}
                />)}
            </ReactMapGl>
            <div className={"map-btn-container"}>
                <div ref={mapModeSelector} className={'map-selector ' + mapSelectorAnimation}>
                    {Object.keys(mapStyles).map((key, i) => {
                        return (<div className={'map-option'} key={i}>
                            <div className={'map-option-img'}
                                 onClick={() => setMapMode(key)}
                                 style={{
                                     borderColor: mapMode === key ? "#00fff1" : "white",
                                     backgroundColor: mapMode === key ? "#00FFF1FF" : "white"
                                 }}
                            >
                                <img src={mapStyles[key].thumbnail} alt={key}/>
                            </div>
                            <span className={'map-mode-text'}>{mapStyles[key].name}</span>
                        </div>)
                    })}
                </div>
                <button
                    onClick={toggleMapSelector}
                    className="map-btn"
                    ref={layerBtn}
                >
                    <FontAwesomeIcon icon={faLayerGroup}/>
                </button>
                <button
                    onClick={() => updateView(defaultMapView.longitude, defaultMapView.latitude)}
                    className="map-btn"
                >
                    <FontAwesomeIcon icon={faHome}/>
                </button>
            </div>
        </div>) : (<Loading/>)}
    </div>);
}
