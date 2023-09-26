import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {useRef} from "react";
import emailjs from 'emailjs-com'
export const Contact = () => {

    return (
        <section id={'contact'}>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className={'contact__option'}>
                        <MdOutlineEmail className={'contact__option-icon'}/>
                        <h4>Email</h4>
                        <h5>siya20577@iiitd.ac.in</h5>
                        <a href={'mailto:siya20577@iiitd.ac.in'}>Send a message</a>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact