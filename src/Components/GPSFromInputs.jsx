import React, { useState } from 'react';


const GPSFromInputs = ({handleSubmit}) => {
    const [fromValue, setFromValue] = useState("");

    const handleChangeFrom = (e) => {
        setFromValue(e.target.value);
    }

    return (
        <form>
            <label>
                Je souhaite visiter :
                <input type="text" value={fromValue} onChange={handleChangeFrom} />
            </label>
            <input type="button" value="L'expérience commence maintenant !" onClick={() => handleSubmit(fromValue)} />
      </form>
    );
}

export default GPSFromInputs;