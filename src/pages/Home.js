import React from "react";

import Title from "../components/Title";
import Map from "../components/Map";

import "../App.css";

export default function Home(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
      }}
    >
      <Title title={props.title} />
      <div className={"home-page"}>
        <Map />
      </div>
    </div>
  );
}
