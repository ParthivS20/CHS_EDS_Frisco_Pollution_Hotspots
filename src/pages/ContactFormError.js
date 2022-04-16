import React from "react";

import ReturnToHomeBtn from "../lib/ReturnToHomeBtn";
import Title from "../lib/Title";

import "../App.css"

export default function ContactFormError() {
    return (
        <div className={'contact-form-error'}>
            <Title title={'error'} />
            <h1>The form did not submit properly. Please try again later.</h1>
            <ReturnToHomeBtn />
        </div>
    )
}
