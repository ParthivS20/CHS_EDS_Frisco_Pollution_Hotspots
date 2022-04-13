import React, {useEffect, useState} from "react";

import Title from "../components/Title";
import Map from "../components/Home/Map";

import {request} from "../utils/Api";
import "../App.css";

export default function Home(props) {
    const [loaded, setLoaded] = useState(false);
    const [locations, setLocations] = useState(null);

    useEffect(() => {
        setLoaded(false);
        request("cleanup-locations")
            .then((response) => {
                setTimeout(() => {
                    setLoaded(true);
                }, 300)
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
                }, 300)
                console.error(error);
            });
    }, []);

    return (
        <div className={"home-page"}>
            <Title title={props.title}/>
            <Map loaded={loaded} locations={locations}/>
        </div>
    );
}
