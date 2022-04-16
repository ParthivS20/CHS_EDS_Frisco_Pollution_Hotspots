import React from "react";

import ContactForm from "../components/Contact/ContactForm";

import "../App.css"
import ContactInfo from "../components/Contact/ContactInfo";

export default function Contact({userEmail}) {
    return (
        <div className={'contact-page'}>
            <ContactForm userEmail={userEmail}/>
            <ContactInfo />
        </div>
    )
}
