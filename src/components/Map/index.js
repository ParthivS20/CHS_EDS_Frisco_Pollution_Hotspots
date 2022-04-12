import React, {useEffect, useState} from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import LoadingScreen from "./LoadingScreen";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";

import "./map.css"

export default function Map() {
    const defaultViewport = {
        width: "95vw",
        height: "95vh",
        latitude: 33.1499819,
        longitude: -96.8340679,
        zoom: 11.45
    };

    const [viewPort, setViewPort] = useState(defaultViewport);
    const [selected, setSelected] = useState(null);
    const [mapMode, setMapMode] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        window.addEventListener('resize', resizeViewport);
        fetch(process.env.REACT_APP_BACKEND_URL + "/cleanup-locations")
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setLoaded(true);
                setLocations(data);
            })
    }, [])

    const resetViewport = () => {
        setViewPort(defaultViewport);
    }

    const resizeViewport = () => {
        setViewPort(state => {
            state.width = "95vw"
            state.height = "95vh"
            return state;
        })
    }

    const updateLocation = location => {
        setSelected(location);
    }

    if(!loaded) {
        return(
            <div>
                <LoadingScreen />
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="map-wrapper">
                    <ReactMapGl
                        initialViewState={viewPort}
                        onViewportChange={viewPort => {
                            setViewPort(viewPort)
                        }}
                        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        style={{width: 600, height: 400}}
                        mapStyle={
                            mapMode ? "mapbox://styles/mapbox/streets-v11" : "mapbox://styles/mapbox/satellite-streets-v11"
                        }
                    >
                        {locations.map((l) => {
                            return (
                                <MapMarker
                                    key={l.name}
                                    location={l}
                                    updateSelectedLocation={updateLocation}
                                />
                            );
                        })}

                        <MapPopup
                            location={selected}
                            updateSelectedLocation={updateLocation}
                        />
                    </ReactMapGl>
                </div>

                <button
                    onClick={() => {
                        setMapMode(!mapMode);
                    }}
                    className="switch-btn"
                >
                    Switch
                </button>
                <button onClick={() => resetViewport} className="reset-btn">
                    Reset
                </button>
            </div>
        )
    }
}
