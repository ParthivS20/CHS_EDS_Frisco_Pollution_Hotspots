import React from "react";

import Title from "../components/Title";
import Map from "../components/Map";

export default function Home(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '90vh'
        }}>
            <Title title={props.title} />
            <Map />
            <h1>{props.children}</h1>
        </div>
    )

}
