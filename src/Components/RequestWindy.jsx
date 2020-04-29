import React from 'react';
import axios from 'axios';
import DisplayiFrame from './DisplayiFrame';


class RequestWindy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCoordonates: {
                lat: 25.3,
                lng: -2
            },
            categories: ['city', 'beach', 'forest', 'camping', 'square', 'traffic']
        }
        this.requestAirport = this.requestAirport.bind(this)
    }
    componentDidUpdate(prevprops, prevstate){
        if(prevprops !== this.props){
            this.requestAirport();
            console.log('update')   
        }
    }
    
    requestAirport() {
        const { input } = this.props
        const {
            categories,
            inputCoordonates
        } = this.state;
        console.log('====================================');
        console.log(inputCoordonates);
        console.log('====================================');
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

                const unique = webcams.map((webcam) => {
                    for (let i = 0; i < webcam.length; i++) {
                        if (ids.find(cam => cam === webcam[i].id) === undefined) {
                            ids.push(webcam[i].id)
                            console.log('====================================');
                            console.log(ids);
                            console.log('====================================');
                            return webcam[i]
                        }
                    }
                })
                if (unique.indexOf(undefined) !== -1) {
                    const i = unique.indexOf(undefined)
                    unique.splice(i, 1)
                }
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
            webcams
        } = this.state;
        return ( 
            <div>
                {webcams ?  
                webcams.map(webcam => {return <DisplayiFrame src={`${webcam.url}?autoplay=1`} id={webcam.id} />}) : null }
            </div>
        )
    }

}

export default RequestWindy;