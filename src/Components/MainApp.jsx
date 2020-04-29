import React, { Component } from 'react';
import Title from './Title';
import axios from 'axios';
import GPSFromInputs from './GPSFromInputs'
import './MainApp.css';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCoordonates: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (fromValue, toValue) => {
    const tempCoords = [];
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(fromValue)}&key=136c835f49be4de192ca1e0cae0fd59f&language=fr&pretty=1`)
        .then((res) => {
            tempCoords.push(res.data.results[0].geometry)
        })
        .then(() => {
            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(toValue)}&key=136c835f49be4de192ca1e0cae0fd59f&&language=frpretty=1`)
            .then((res) => {
                tempCoords.push(res.data.results[0].geometry)
            })
            .then(() => {
                this.setState({inputCoordonates: tempCoords})
            });   
        });
      };


  render() {
    return (
      <div className="background">
        <Title />
        <GPSFromInputs handleSubmit={this.handleSubmit} />
      </div>  
    );
  }
}

export default MainApp;
