import React from "react";

import Title from "../lib/Title";


interface Props {
    title: string,
    children?: string
}

export default function SamplePage(props: Props) {
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
