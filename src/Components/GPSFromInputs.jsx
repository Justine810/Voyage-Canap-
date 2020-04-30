import React, { useState } from 'react';


const GPSFromInputs = ({handleSubmit}) => {
    const [fromValue, setFromValue] = useState("");

    const handleChangeFrom = (e) => {
        setFromValue(e.target.value);
    }

    return (
        <form className = "form">
            <h2 className="subTitle">Voyagez de chez vous !</h2>
            <label>
                <input className="destination" type="text" placeholder="Votre destination" value={fromValue} onChange={handleChangeFrom} />
            </label>
            <input className="startButton" type="button" value="L'expérience commence maintenant !" onClick={() => handleSubmit(fromValue)} />
      </form>
    );
}

export default GPSFromInputs;