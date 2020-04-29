import React from 'react';
import axios from 'axios'

class RequestWindy extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputCoordonates: [],
            camAirport: {
                airportStart: {},
                airportEnd: {}
            },
            camCity: {
                cityStart: {},
                cityEnd: {}
            }
        }
        this.requestCity = this.requestCity.bind(this)
    }
    requestCity(){

    }
    render(){
        const { camAirport, camCity} = this.state;
        return(
            <div>
                <button type="submit" onClick={this.requestCity}>Click here</button>
                <div>{camAirport}</div>
                <div>{camCity}</div>
            </div>
        )
    }
    
}

export default RequestWindy;