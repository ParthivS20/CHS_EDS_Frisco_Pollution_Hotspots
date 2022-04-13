import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
    return (
        <div className="loader-container">
            <FontAwesomeIcon
                icon={faSync}
                spin
                className="spin-fast loader-spinner"
            />
        </div>
    );
}
