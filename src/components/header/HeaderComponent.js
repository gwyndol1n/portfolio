import React from 'react';
import TiltWrapperComponent from '../TiltWrapperComponent';
import './HeaderComponent.css';

const HeaderComponent = ({content = "", fontSize = "60px"}) => {
    return (
        <div className='content-container'>
            {/* <div className='layer-2'>
                <div className='static second-animation' />
            </div>
            <div className='layer-1'>
                <div className='static first-animation'>
                    {content.split(" ").map((el, i) => <TiltWrapperComponent content={el} fontSize={fontSize} key={i}/>)}
                </div>
            </div> */}
            {content.split(" ").map((el, i) => <TiltWrapperComponent content={el} fontSize={fontSize} key={i}/>)}
        </div>
    )
}

export default HeaderComponent;