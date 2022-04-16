import React from "react";

import Title from "../lib/Title";

export default function SamplePage({title, children}) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '90vh'
        }}>
            <Title title={title} />
            <h1 style={{color:"white"}}>{children}</h1>
        </div>
    )

}
