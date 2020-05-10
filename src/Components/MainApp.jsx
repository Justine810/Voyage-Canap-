import React, { Component } from 'react';
import Title from './Title';
import axios from 'axios';
import GPSFromInputs from './GPSFromInputs'
import RequestWindy from './RequestWindy'
import './MainApp.css';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCoordonates: [], 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showFooter(){
    const { displayFooter } = this.state;
    this.setState({displayFooter : !displayFooter})
  }

  handleSubmit = (fromValue, toValue) => {
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURI(fromValue)}&key=0dd82ea1ecbc46798d48a8a7da6341f9&language=fr&pretty=1`)
        .then((res) => {
            this.setState({inputCoordonates: res.data.results[0].geometry})
        })
      };


  render() {
    const { inputCoordonates } = this.state;
    return (
      <div className="background">
        <Title />
        <GPSFromInputs handleSubmit={this.handleSubmit} showFooter={this.showFooter} />        
        <RequestWindy input={inputCoordonates}/>
      </div>  
    );
  }

}

export default MainApp;



