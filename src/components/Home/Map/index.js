import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faHome } from "@fortawesome/free-solid-svg-icons";

import Loading from "./Loading";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";

import "./map.css";

export default function Map({loaded, locations, mapView, setMapView, defaultViewState, selected, setSelected }) {
  const [mapMode, setMapMode] = useState(0);

  const closePopup = () => {
    setSelected(null);
  };

  const openPopup = (location) => {
    setSelected(location);
  };

  const updateViewPort = (vP) => {
    setMapView(vP);
  };

  const mapStyles = [
      'mapbox://styles/mapbox/navigation-night-v1',
      'mapbox://styles/mapbox/satellite-streets-v11',
      'mapbox://styles/mapbox/streets-v11',
  ];

  return (
    <div className={"map"}>
      {loaded ?
          (
            <div className="map-wrapper">
              <ReactMapGl
                  {...mapView}
                  onMove={(evt) => {
                    updateViewPort(evt.viewState);
                  }}
                  mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  style={{
                    width: "72vw",
                    height: "85vh"
                  }}
                  mapStyle={mapStyles[mapMode]}
              >
                {locations &&
                    locations.map((l) => {
                      return (
                          <MapMarker key={l.name} location={l} openPopup={openPopup} />
                      );
                    })}

                {selected && (
                    <MapPopup
                        location={selected}
                        openPopup={openPopup}
                        closePopup={closePopup}
                    />
                )}
              </ReactMapGl>
              <div className={"map-btn-container"}>
                <button
                    onClick={() => {
                      setMapMode(mapMode >= mapStyles.length - 1 ? 0 : mapMode + 1);
                    }}
                    className="map-btn"
                >
                  <FontAwesomeIcon icon={faLayerGroup} />
                </button>
                <button
                    onClick={() => updateViewPort(defaultViewState)}
                    className="map-btn"
                >
                  <FontAwesomeIcon icon={faHome} />
                </button>
              </div>
            </div>
          )
          :
          (
            <Loading />
          )}
    </div>
  );
}
