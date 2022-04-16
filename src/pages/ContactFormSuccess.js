import React from "react";

import ReturnToHomeBtn from "../lib/ReturnToHomeBtn";
import Title from "../lib/Title";

import "../App.css"

export default function ContactFormSuccess() {
    return (
        <div className={'contact-form-success'}>
            <Title title={"Thank You"} />
            <h1>Thank You! Your form has successfully been submitted.</h1>
            <ReturnToHomeBtn />
        </div>
    )
}
