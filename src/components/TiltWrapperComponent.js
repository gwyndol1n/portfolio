import React from "react";
import TiltComponent from "./TiltComponent";
import "./TiltWrapperComponent.css"

/* maps over string to produce character tiles */

const TiltWrapperComponent = ({content = "", fontSize = "60px"}) => {
    const contentToRender = content.split("").map((char, index) => <TiltComponent content={char} fontSize={fontSize} key={index}/>)

    return (
        <div className="tilt-wrapper first-animation">{contentToRender}</div>
    )
}

export default TiltWrapperComponent;