import React from 'react'
import Tilt from "react-parallax-tilt";
import "./TiltComponent.css";

const TiltComponent = ({content = "", className = "tilt-component", glareColor = "rgb(10,10,10)", perspective = 500, scale = 1.02, ...restProps}) => {
    return (
        <Tilt
            className={className}
            glareEnable={false}
            scale={scale}
            perspective={perspective}
            glareColor={glareColor}>
                <div className="inner-element" style={{fontSize: restProps['fontSize']}}>
                    <div>{content}</div>
                </div>
        </Tilt>
    )
}

export default TiltComponent;