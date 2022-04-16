import React, {useEffect, useState} from "react";

import "./contact.css"

export default function ContactForm({userEmail}) {
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(false);

    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(userEmail && emailRegex.test(userEmail)) {
            setEmail(userEmail)
            setIsEmail(true)
        }
    }, [userEmail])

    const handleSubmit = form => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form)).toString(),
        })
            .then(() => console.log("good"))
            .catch(error => {
                console.log(error)
            });
    };

    return (
        <div className={'contact-form-wrapper'}>
            <form name="Contact" onSubmit={e => {
                e.preventDefault()
                handleSubmit(e.target)
            }}>
                <input type="hidden" name="form-name" value="Contact" />
                <div className={'contact-form-header'}>
                    <h1>HAVE SOME QUESTIONS?</h1>
                    <h2>Get In Touch!</h2>
                </div>
                <div className={'contact-form'}>
                    <div>
                        <input type="text" name="First Name" placeholder={'First Name'} className={'input-t1'} required/>
                        <input type="text" name="Last Name" placeholder={'Last Name'} className={'input-t1'} required/>
                    </div>
                    <div>
                        <input type="email" name="Email" placeholder={'Email'} className={'input-t1'} required value={email} onChange={ e => {
                            if(!isEmail) setEmail(e.target.value)
                        }}/>
                        <input type="tel" name="Phone" placeholder={'Phone'} className={'input-t1'}/>
                    </div>
                    <div>
                        <textarea name="Message" placeholder={'Message'} className={'input-t2'} required/>
                    </div>
                    <div>
                        <button type="submit" className={'submit'}>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
