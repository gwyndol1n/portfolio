import React from 'react';
import './NavComponent.css';
import { TbGenderTransgender } from "react-icons/tb";
import { PiHouseLineFill } from "react-icons/pi";
import { PiCodeBold } from "react-icons/pi";
import { PiMailboxBold } from "react-icons/pi";

import { useState } from 'react';

const NavComponent = () => {
    const [currentNav, setCurrentNav] = useState("#");

    function isCurrentNavActive(anchorName) {
        return currentNav === anchorName ? 'active' : ''
    }

    return (
        <nav>
            <a href="#" onClick={() => setCurrentNav("#")} className={isCurrentNavActive("#")}><PiHouseLineFill/></a>
            <a href="#about" onClick={() => setCurrentNav("#about")} className={isCurrentNavActive("#about")}><TbGenderTransgender/></a>
            <a href="#experience" onClick={() => setCurrentNav("#experience")} className={isCurrentNavActive("#experience")}><PiCodeBold/></a>
            <a href="#contact" onClick={() => setCurrentNav("#contact")} className={isCurrentNavActive("#contact")}><PiMailboxBold/></a>
        </nav>
    )
}

export default NavComponent;