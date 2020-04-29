import React, { useState } from 'react';


const GPSFromInputs = ({handleSubmit}) => {
    const [fromValue, setFromValue] = useState("")
    const [toValue, setToValue] = useState("")

    const handleChangeFrom = (e) => {
        setFromValue(e.target.value)
    }

    const handleChangeTo = (e) => {
        setToValue(e.target.value)
    }

    return (
        <form>
            <label>
                Ville de départ :
                <input type="text" value={fromValue} onChange={handleChangeFrom} />
            </label>
            <label>
                Ville d'arrivée :
                <input type="text" value={toValue} onChange={handleChangeTo} />
            </label>
            <input type="button" value="L'expérience commence maintenant !" onClick={() => handleSubmit(fromValue, toValue)} />
      </form>
    );
}

export default GPSFromInputs;