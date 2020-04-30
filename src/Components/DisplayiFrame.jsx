import React from 'react';
import { Slide } from 'react-slideshow-image'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    arrows: true
  
  }

function DisplayiFrame({ state, showSlide }) {

return(
    <div className="first-div-display-frame">
        <Slide {...properties}>
            {
                state.map(obj => {return <iframe src={obj.url} title={obj.id} />})
            } 
        </Slide>
        <button type="reset" className="reset-button" onClick = {showSlide}>Quitter</button>
    </div>

)
    
}

export default DisplayiFrame;