import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GPSFromInputs = () => {
    const [inputCoordonates, setInputCoordinates] = useState([])
    const [fromValue, setFromValue] = useState("")
    const [toValue, setToValue] = useState("")

    const handleChangeFrom = (e) => {
        setFromValue(e.target.value)
    }

    const handleChangeTo = (e) => {
        setToValue(e.target.value)
    }

    useEffect(() => {
        console.log('====================================');
        console.log(inputCoordonates);
        console.log('====================================');
    }, [inputCoordonates])

    const handleSubmit = () => {
        const tempCoords = [];
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(fromValue)}&key=6e943d5bc7094a9ab1fa380b2273065a&pretty=1`)
            .then((res) => {
                //console.log(res.data.results[0].geometry);
                tempCoords.push(res.data.results[0].geometry)
            })
            .then(() => {
                axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(toValue)}&key=6e943d5bc7094a9ab1fa380b2273065a&pretty=1`)
                .then((res) => {
                    //console.log(res.data.results[0].geometry);
                    tempCoords.push(res.data.results[0].geometry)
                })
                .then(() => {
                    setInputCoordinates(tempCoords)
                });   
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ville de départ :
                <input type="text" value={fromValue} onChange={handleChangeFrom} />
            </label>
            <label>
                Ville d'arrivée :
                <input type="text" value={toValue} onChange={handleChangeTo} />
            </label>
            <input type="button" value="L'expérience commence maintenant !" onClick={handleSubmit} />
      </form>
    );
}

export default GPSFromInputs;