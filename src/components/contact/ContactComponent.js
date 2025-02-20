import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';

const ContactComponent = () => {
    // const form = useRef();

    return (
        <section id='contact'>
            <h2>contact me</h2>
            <div className='section-container'>
                
                <div className='section-tile' id='contact-me'>
                    <article className='contact-option'>
                        <MdOutlineEmail />
                        <h4 className='section-header'>Email</h4>
                        <div className='section-row'>
                            <a href="mailto:gwyndolinmaria@gmail.com">Send an Email</a>
                        </div>
                        <div className='section-row'>
                        <text>I'm available any day during the week for any questions, concerns, or interview scheduling! Feel free to reach out to me!</text>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default ContactComponent;