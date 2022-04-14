import React, {useRef, useState} from "react";
import ReactMapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faHome } from "@fortawesome/free-solid-svg-icons";

import Loading from "./Loading";
import MapMarker from "./MapMarker";
import MapPopup from "./MapPopup";

import dark from "./MapImages/dark.png"
import light from "./MapImages/light.png"
import navigationDay from "./MapImages/navigationDay.png"
import navigationNight from "./MapImages/navigationNight.png"
import satellite from "./MapImages/satellite.png"
import streets from "./MapImages/streets.png"

import "./map.css";
import {ClickOutside} from "../../../lib/ClickOutside";

export default function Map({loaded, locations, mapView, setMapView, defaultViewState, selected, setSelected }) {
  const [mapMode, setMapMode] = useState("dark");
  const [viewMapModeSelector, setViewMapModeSelector] = useState(false);

  const mapModeSelector = useRef(null);
  const layerBtn = useRef(null);
  ClickOutside(mapModeSelector, () => setViewMapModeSelector(false), [layerBtn])

  const closePopup = () => {
    setSelected(null);
  };

  const openPopup = (location) => {
    setSelected(location);
  };

  const updateViewPort = (vP) => {
    setMapView(vP);
    setSelected(null);
  };

  const mapStyles = {
    streets: {
      style: 'mapbox://styles/mapbox/streets-v11',
      thumbnail: streets,
      name: 'Map',
    },
    light: {
      style: 'mapbox://styles/mapbox/light-v10',
      thumbnail: light,
      name: 'Light',
    },
    dark: {
      style: 'mapbox://styles/mapbox/dark-v10',
      thumbnail: dark,
      name: 'Dark',
    },
    satelliteStreets: {
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      thumbnail: satellite,
      name: 'Satellite',
    },
    navigationDay: {
      style: 'mapbox://styles/mapbox/navigation-day-v1',
      thumbnail: navigationDay,
      name: 'Navigation Day',
    },
    navigationNight: {
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      thumbnail: navigationNight,
      name: 'Navigation Night',
    }
  }

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
                  mapStyle={mapStyles[mapMode].style}
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
                <div className={'map-selector'} style={{display:viewMapModeSelector ? "flex" : "none", visibility: viewMapModeSelector ? "visible" : "hidden"}} ref={viewMapModeSelector ? mapModeSelector : null}>
                  {
                    Object.keys(mapStyles).map((key, i) => {
                      return (
                          <div className={'map-option'} key={i}>
                            <div className={'map-option-img'}
                                 onClick={() => setMapMode(key)}
                                 style={{borderColor: mapMode === key ? "#00fff1": "white", backgroundColor: mapMode === key ? "#00FFF1FF": "white"}}
                            >
                              <img src={mapStyles[key].thumbnail} alt={key}/>
                            </div>
                            <span className={'map-mode-text'}>{mapStyles[key].name}</span>
                          </div>
                      )
                    })
                  }
                </div>
                <button
                    onClick={() => {
                      setViewMapModeSelector(!viewMapModeSelector)
                    }}
                    className="map-btn"
                    ref={layerBtn}
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
