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
            <div className='section-container'>
                <div className='section-tiles'>
                    <div className='section-tile' id='areas-of-expertise'>
                        <PiGlobeHemisphereEastBold className='section-icon' />
                            <h2 className='section-header'>
                                areas of expertise
                            </h2>
                            {[
                                [RiFlowChart, "Model-View-Controller Frameworks"],
                                [SiCplusplus, "Object-Oriented Languages"],
                                [SiRubyonrails, "Ruby on Rails"],
                                [DiJavascript, "Javascript"],
                                [DiReact, "ReactJS"],
                                [DiPython, "Python"],
                                [DiDatabase, "SQL"]
                            ].map(([icon, text]) => {
                                return <div className='section-row'>
                                    {React.createElement(icon, {className: 'section-icon'})}<text>{text}</text>
                                </div>
                            })}
                    </div>
                    <div className='section-tile' id='prior-experience'>
                        <FaLaptopCode className='section-icon' />
                        <h2 className='section-header'>
                            prior positions
                        </h2>
                        <div className='section-row'>
                            <HiCode className='section-icon' /><text>Senior Software Engineer @ <a href='https://riskonnect.com/' target="_blank" rel="noopener noreferrer">Riskonnect</a></text>
                        </div>
                        <div className='section-row'>
                            <text><strong>09/2020 - 09/2024</strong></text>
                        </div>
                        <div className='section-row'>
                            <HiCode className='section-icon' /><text>Freelance Developer <a href='https://github.com/gwyndol1n' target="_blank" rel="noopener noreferrer">(my Github)</a></text>
                        </div>
                        <div className='section-row'>
                            <text><strong>06/2020 - current</strong></text>
                        </div>
                        <div className='section-row'>
                            <HiCode className='section-icon' /><text>Software Developer @ <a href='https://www.corcentric.com/' target="_blank" rel="noopener noreferrer">Vendorin (purchased by Corcentric)</a></text>
                        </div>
                        <div className='section-row'>
                            <text><strong>11/2016 - 08/2020</strong></text>
                        </div>
                    </div>
                    <div className='section-tile' id='projects'>
                        <FaCodePullRequest className='section-icon' />
                        <h2 className='section-header'>projects</h2>
                        <div className='section-row'>
                            <HiCode className='section-icon' /><text><strong>Catalyst/Castellan</strong> @ <a href='https://riskonnect.com/' target="_blank" rel="noopener noreferrer"><strong>Riskonnect</strong></a></text>
                        </div>
                        <div className='section-row'>
                            <text><strong>Ruby on Rails</strong>-based risk management software, leveraging <strong>React</strong> view components with <strong>Stimulus</strong> and <strong>Hotwire</strong> connectivity</text>
                        </div>
                        <div className='section-row'>
                            <HiCode className='section-icon' /><text><strong>Inroll</strong> @ <strong>Vendorin</strong></text>
                        </div>
                        <div className='section-row'>
                            <text><strong>Ruby on Rails</strong>-based CRM software, incorporating a <strong>RESTful/RoR-based API</strong> to interface with <strong>.NET legacy program</strong>, as well as numerous other modules <strong>(PDF generator, in-app messaging client, Excel document import module, RESTful API for external database storage)</strong></text>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceComponent;