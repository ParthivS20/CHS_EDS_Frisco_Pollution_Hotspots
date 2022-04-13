import React from "react";
import Title from "../components/Title";

export default function SamplePage(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '90vh'
        }}>
            <Title title={props.title} />
            <h1 style={{color:"white"}}>{props.children}</h1>
        </div>
    )

}
