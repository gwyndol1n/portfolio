import React from 'react';
import './AboutComponent.css';
import { PiGlobeHemisphereEastBold, PiGraduationCapBold } from "react-icons/pi";
import { SiRubyonrails, SiCplusplus } from "react-icons/si";
import { DiJavascript, DiReact, DiPython, DiDatabase } from "react-icons/di";
import { TbGenderTransgender } from "react-icons/tb";
import { RiFlowChart } from "react-icons/ri";

const AboutComponent = () => {
    return (
        <section id='about'>
            <h2>about me</h2>
            <div className='about-container'>
                <div className='about-content'>
                    <div className='about-tiles'>
                        <div className='about-tile' id='areas-of-expertise'>
                            <PiGlobeHemisphereEastBold className='about-icon' />
                            <h2 className='about-header'>
                                areas of expertise
                            </h2>
                            <div className='about-row'>
                                <RiFlowChart className='about-icon'/><text>&nbsp;Model-View-Controller Frameworks</text>
                            </div>
                            <div className='about-row'>
                                <SiCplusplus className='about-icon'/><text>&nbsp;Object-Oriented Languages</text>
                            </div>
                            <div className='about-row'>
                                <SiRubyonrails className='about-icon'/><text>&nbsp;Ruby on Rails</text>
                            </div>
                            <div className='about-row'>
                                <DiJavascript className='about-icon'/><text>&nbsp;Javascript</text>
                            </div>
                            <div className='about-row'>
                                <DiReact className='about-icon'/><text>&nbsp;ReactJS</text>
                            </div>
                            <div className='about-row'>
                                <DiPython className='about-icon'/><text>&nbsp;Python</text>
                            </div>
                            <div className='about-row'>
                                <DiDatabase className='about-icon'/><text>&nbsp;SQL</text>
                            </div>
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