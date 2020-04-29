import React from 'react';
import axios from 'axios';
import DisplayiFrame from './DisplayiFrame';


class RequestWindy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCoordonates: {
                lat: 48.85,
                lng: 2.35
            },
            categories: ['city', 'beach', 'forest', 'camping', 'square', 'traffic']
        }
        this.requestAirport = this.requestAirport.bind(this)
    }
    
    requestAirport() {
        const {
            categories,
            inputCoordonates
        } = this.state;
        axios
          .all(
            categories.map(cat =>
              axios.get(`https://api.windy.com/api/webcams/v2/list/nearby=${inputCoordonates.lat},${inputCoordonates.lng},100/category=${cat}/orderby=popularity?show=webcams:location,player,category&key=AsDAEAc6EjyD0RnHhZR3z5QYQZnNTpzP`)
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
                        //1. on fait le tableau id
                        //2.find de ids avec le map sur webcam 
                        
                    }
                })
                if (unique.indexOf(undefined) !== -1) {
                    const i = unique.indexOf(undefined)
                    unique.splice(i, 1)
                }
                const formatted = unique.map(item => {
                    return item.id ={
                    id: item.id,
                    url: item.player.lifetime.embed
                    }})

                this.setState({ webcams: formatted });
                }.bind(this)
            )
          );
      }



        // for (let i = 0; i < categories.length; i++) {
        //     axios
        //         .get(`https://api.windy.com/api/webcams/v2/list/nearby=${inputCoordonates.lat},${inputCoordonates.lng},250/category=${categories[i]}/orderby=popularity?show=webcams:location,player,category&key=AsDAEAc6EjyD0RnHhZR3z5QYQZnNTpzP`)
        //         .then(res => {
        //             console.log('====================================');
        //             console.log(i);
        //             console.log('====================================');
        //             return res.data;
        //         })
        //         .then(data => {
        //             if (data) {
        //                 const webcam = data.result.webcams;
        //                 webCamsTab.push(webcam[0].player.lifetime.embed);

        //             }
        //         })
        // }

        // this.setState({
        //     webCams: webCamsTab
        // })

    //}

    //     const { charsDatas } = this.state;
    //     axios
    //       .all(
    //         Object.keys(charsDatas).map(card =>
    //           axios.get(`https://akabab.github.io/superhero-api/api/id/${charsDatas[card].id}.json`)
    //         )
    //       )
    //       .then(
    //         axios.spread(
    //           function(...res) {
    //             const allChars = res.map(result => result.data);
    //             this.setState({ characters: allChars });
    //           }.bind(this)
    //         )
    //       );
    //   }

    render() {
        const {
            webcams
        } = this.state;
        return ( 
            <div>
                <button type = "button"
                onClick = {
                    this.requestAirport
                } > Click here </button> 
                {webcams ?  
                webcams.map(webcam => {return <DisplayiFrame src={`${webcam.url}?autoplay=1`} id={webcam.id} />}) : null }
            </div>
        )
    }

}

export default RequestWindy;