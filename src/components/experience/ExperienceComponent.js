import React from 'react';
import './ExperienceComponent.css';
import { PiGlobeHemisphereEastBold } from "react-icons/pi";
import { SiRubyonrails, SiCplusplus, SiHotwire, SiStimulus } from "react-icons/si";
import { DiJavascript, DiReact, DiPython, DiDatabase } from "react-icons/di";
import { RiFlowChart } from "react-icons/ri";
import { FaLaptopCode, FaCodePullRequest } from "react-icons/fa6";
import { HiCode } from "react-icons/hi";

const ExperienceComponent = () => {
    return (
        <section id='experience'>
            <h2>experience</h2>
            <div className='about-container'>
                <div className='about-tiles'>
                    <div className='about-tile' id='areas-of-expertise'>
                        <PiGlobeHemisphereEastBold className='about-icon' />
                            <h2 className='about-header'>
                                areas of expertise
                            </h2>
                            <div className='about-row'>
                                <RiFlowChart className='about-icon'/><text>Model-View-Controller Frameworks</text>
                            </div>
                            <div className='about-row'>
                                <SiCplusplus className='about-icon'/><text>Object-Oriented Languages</text>
                            </div>
                            <div className='about-row'>
                                <SiRubyonrails className='about-icon'/><text>Ruby on Rails</text>
                            </div>
                            <div className='about-row'>
                                <DiJavascript className='about-icon'/><text>Javascript</text>
                            </div>
                            <div className='about-row'>
                                <DiReact className='about-icon'/><text>ReactJS</text>
                            </div>
                            <div className='about-row'>
                                <DiPython className='about-icon'/><text>Python</text>
                            </div>
                            <div className='about-row'>
                                <DiDatabase className='about-icon'/><text>SQL</text>
                            </div>
                    </div>
                    <div className='about-tile' id='prior-experience'>
                        <FaLaptopCode className='about-icon' />
                        <h2 className='about-header'>
                            prior positions
                        </h2>
                        <div className='about-row'>
                            <HiCode className='about-icon' /><text>Senior Software Engineer @ <a href='https://riskonnect.com/' target="_blank">Riskonnect</a></text>
                        </div>
                        <div className='about-row'>
                            <text><strong>09/2020 - 09/2024</strong></text>
                        </div>
                        <div className='about-row'>
                            <HiCode className='about-icon' /><text>Freelance Developer <a href='https://github.com/gwyndol1n' target="_blank">(my Github)</a></text>
                        </div>
                        <div className='about-row'>
                            <text><strong>06/2020 - current</strong></text>
                        </div>
                        <div className='about-row'>
                            <HiCode className='about-icon' /><text>Software Developer @ <a href='https://www.corcentric.com/' target="_blank">Vendorin (purchased by Corcentric)</a></text>
                        </div>
                        <div className='about-row'>
                            <text><strong>11/2016 - 08/2020</strong></text>
                        </div>
                    </div>
                    <div className='about-tile' id='projects'>
                        <FaCodePullRequest className='about-icon' />
                        <h2 className='about-header'>projects</h2>
                        <div className='about-row'>
                            <HiCode className='about-icon' /><text><strong>Catalyst/Castellan</strong> @ <a href='https://riskonnect.com/' target="_blank"><strong>Riskonnect</strong></a></text>
                        </div>
                        <div className='about-row'>
                            <text><strong>Ruby on Rails</strong>-based risk management software, leveraging <strong>React</strong> view components with <strong>Stimulus</strong> and <strong>Hotwire</strong> connectivity</text>
                        </div>
                        <div className='about-row'>
                            <HiCode className='about-icon' /><text><strong>Inroll</strong> @ <strong>Vendorin</strong></text>
                        </div>
                        <div className='about-row'>
                            <text><strong>Ruby on Rails</strong>-based CRM software, incorporating a <strong>RESTful/RoR-based API</strong> to interface with <strong>.NET legacy program</strong>, as well as numerous other modules <strong>(PDF generator, in-app messaging client, Excel document import module, RESTful API for external database storage)</strong></text>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceComponent;