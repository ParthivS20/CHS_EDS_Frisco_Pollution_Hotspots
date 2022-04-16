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

    return (
        <div className={'contact-form-wrapper'}>
            <form name="contact" method="post" id={'contact-form'}>
                <input type="hidden" name="form-name" value="contact" />
                <div className={'contact-form'}>
                    <div>
                        <input type="text" name="firstname" placeholder={'First Name'} className={'input-t1'} required/>
                        <input type="text" name="lastname" placeholder={'Last Name'} className={'input-t1'} required/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder={'Email'} className={'input-t1'} required value={email} onChange={ e => {
                            if(!isEmail) setEmail(e.target.value)
                        }}/>
                        <input type="tel" name="phone" placeholder={'Phone'} className={'input-t1'}/>
                    </div>
                    <div>
                        <textarea name="message" placeholder={'Message'} className={'input-t2'} required/>
                    </div>
                    <div>
                        <button type="submit" className={'submit'}>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
