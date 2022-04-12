import React, { useEffect, useState } from "react";
import ReactMapGl, { Popup } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faLayerGroup,
  faRotateRight
} from "@fortawesome/free-solid-svg-icons";
import "mapbox-gl/dist/mapbox-gl.css";

import LoadingScreen from "./LoadingScreen";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";

import "./map.css";

export default function Map() {
  const defaultViewport = {
    latitude: 33.1499819,
    longitude: -96.8340679,
    zoom: 11.45
  };

  const [viewPort, setViewPort] = useState(defaultViewport);
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [mapMode, setMapMode] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    console.log(showPopup);
  }, [showPopup]);

  useEffect(() => {
    setLoaded(false);
    fetch(
      "https://EDS-CS-Project-Backend.parthivs20.repl.co/api/cleanup-locations"
    )
      .then((response) => {
        setLoaded(true);
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        setLoaded(true);
        console.error(error);
      });
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    setSelected(null);
  };

  const openPopup = (location) => {
    setShowPopup(true);
    setSelected(location);
  };

  const updateViewPort = (vP) => {
    setViewPort(vP);
  };

  if (!loaded) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  } else {
    return (
      <div className={"map"}>
        <div className="map-wrapper">
          <ReactMapGl
            {...viewPort}
            onMove={(evt) => {
              updateViewPort(evt.viewState);
            }}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            style={{
              width: "70vw",
              height: "85vh"
            }}
            mapStyle={
              mapMode
                ? "mapbox://styles/mapbox/streets-v11"
                : "mapbox://styles/mapbox/satellite-streets-v11"
            }
          >
            {locations &&
              locations.map((l) => {
                return (
                  <MapMarker key={l.name} location={l} openPopup={openPopup} />
                );
              })}

            {showPopup && (
              <MapPopup
                location={selected}
                openPopup={openPopup}
                closePopup={closePopup}
              />
            )}
          </ReactMapGl>
        </div>
        <div className={"map-btn-container"}>
          <button
            onClick={() => {
              setMapMode(!mapMode);
            }}
            className="map-btn"
          >
            <FontAwesomeIcon icon={faLayerGroup} />
          </button>
          <button
            onClick={() => updateViewPort(defaultViewport)}
            className="map-btn"
          >
            <FontAwesomeIcon icon={faRotateRight} />
          </button>
        </div>
      </div>
    );
  }
}
