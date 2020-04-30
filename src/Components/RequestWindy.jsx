import React from 'react';
import axios from 'axios';
import DisplayiFrame from './DisplayiFrame';
import './RequestWindy.css'

class RequestWindy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCoordonates: {
                lat: 25.3,
                lng: -2
            },
            categories: ['city', 'beach', 'forest', 'camping', 'square', 'traffic', 'pool', 'resort', 'airport', 'park'],
            showSlide: false
        }
        this.requestAirport = this.requestAirport.bind(this)
        this.displaySlide = this.displaySlide.bind(this)
    }
    componentDidUpdate(prevprops, prevstate){
        if(prevprops !== this.props){
            this.requestAirport();
            this.displaySlide(this.state)
            console.log('update')   
        }
    }
    displaySlide(state){
        const {showSlide} = state;
        this.setState({showSlide: !showSlide})
    }
    
    requestAirport() {
        const { input } = this.props
        const {
            categories,
        } = this.state;
        axios
          .all(
            categories.map(cat =>
              axios.get(`https://api.windy.com/api/webcams/v2/list/nearby=${input.lat},${input.lng},100/category=${cat}/orderby=popularity?show=webcams:location,player,category&key=AsDAEAc6EjyD0RnHhZR3z5QYQZnNTpzP`)
            )
          )
          .then(
            axios.spread(
              function(...res) {
                const webcams = res.filter(response => response.data.result.total !== 0).map(response => {
                    return response.data.result.webcams
                    });
                const ids = [];

                let unique = webcams.map((webcam) => {
                    const final = [];
                    for (let x = 0; x < 2; x++) {
                        for (let i = 0; i < webcam.length; i++) {
                            if (ids.find(cam => cam === webcam[i].id) === undefined) {
                                ids.push(webcam[i].id)
                                final.push(webcam[i]);
                                break
                            }
                        }
                    }
                    return final;
                })
                unique = unique.reduce((a, b) => {
                    b.forEach( object => a.push(object))
                    return a
                    }
                    );
                // if (unique.indexOf(undefined) !== -1) {
                //     const i = unique.indexOf(undefined)
                //     unique.splice(i, 1)
                // }
                const formatted = unique.map(item => {
                    return item.id ={
                    id: item.id,
                    title: item.title,
                    url: item.player.lifetime.embed
                    }})

                this.setState({ webcams: formatted });
                }.bind(this)
            )
          );
      }



    render() {
        const {
            webcams, showSlide
        } = this.state;
        return ( 
            <div className="penis">
                {webcams && showSlide ? 
                <div className="frame-display">
                    <DisplayiFrame state={webcams} showSlide={() => this.displaySlide(this.state)} />
                </div>
                 : null }
            </div>
        )
    }

}

export default RequestWindy;
