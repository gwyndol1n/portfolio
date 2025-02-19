import React from 'react';
import './AboutComponent.css';
import myPicture from '../../assets/me.png'
import { PiGraduationCapBold } from "react-icons/pi";
import { TbGenderTransgender } from "react-icons/tb";


const AboutComponent = () => {
    return (
        <section id='about'>
            <h2>about me</h2>
            <div className='about-container'>
                <div className='about-content'>
                    <div className='about-tiles'>
                        <div className='about-tile' id='picture-of-me'>
                            <img src={myPicture} alt="Me" className='about-image' />
                            <h2 className='about-header'>Me!</h2>
                        </div>
                        <div className='about-tile' id='education'>
                            <PiGraduationCapBold className='about-icon' />
                            <h2 className='about-header'>
                                education
                            </h2>
                            <p><strong>Bachelor's in Science</strong>, University of Southern Mississippi</p>
                            <p><strong>Information Technology</strong> w/ Security emphasis, Computer Science minor</p>
                            <p>Graduated <strong>May 2017</strong></p>
                        </div>
                        <div className='about-tile' id='about-me'>
                            <TbGenderTransgender className='about-icon' />
                            <h2 className='about-header'>
                               more about me
                            </h2>
                            <p>I've been invested in software development nearly my entire life. The first ever "code" I wrote was a <strong>Zork-like</strong> text adventure entirely within a batch file.</p>
                            <p>With experience comes understanding, and from that I understand my passion is <strong>making it work.</strong></p>
                            <p>Over the last 9 years, there hasn't been a framework, codebase, or technology I couldn't understand and <strong>make work.</strong></p>
                            <p>Programming and development are my biggest passions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent;