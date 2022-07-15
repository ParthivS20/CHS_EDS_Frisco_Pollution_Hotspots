import React from "react";

import ContactForm from "../components/Contact/ContactForm";

import "../App.css"

import ContactInfo from "../components/Contact/ContactInfo";

type Props = {
    userEmail: string
}

export default function Contact(props: Props) {
    return (
        <div className={'contact-page'}>
            <ContactForm userEmail={props.userEmail}/>
            <ContactInfo />
        </div>
    )
}
