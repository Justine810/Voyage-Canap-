import React from 'react';
import axios from 'axios';

class RequestWindy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCoordonates: {
                lat: 48.85,
                lng: 2.35
            },
            webCams: null,
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
                this.setState({ webcams: unique });
                }.bind(this)
            )
          );
      }
    //   formatNeosData(data) {
    //     const formattedData = Object.keys(data);
    //     /* console.log(data); */
    //     const neosMatrix = formattedData.map(date => {
    //       // date ==> "2015-09-08"
    //       return data[date].map(neo => {
    //         // neo ==> {...}
    //         return {
    //           name: neo.name,
    //           magnitude: neo.absolute_magnitude_h,
    //           closeDate: neo.close_approach_data[0].close_approach_date,
    //           danger: neo.is_potentially_hazardous_asteroid
    //         };
    //       });
    //     });
    //     const flattenMatrix = neosMatrix.reduce((carry, current) => {
    //       // current ==> [{...},{...}]
    //       current.forEach(neo => carry.push(neo));
    //       return carry;
    //     }, []);
    //     /* console.log(flattenMatrix); */
    //     const filter = flattenMatrix.filter(item => item.danger === true);
    //     /* console.log(filter); */
    //     this.setState({ arrFilter: filter });
    //   }


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
            city
        } = this.state;
        return ( 
            <div>
                <button type = "button"
                onClick = {
                    this.requestAirport
                } > Click here </button> 
                {
                    city ? < iframe className = "video-frame"
                    src = {
                        `${city}?autoplay=1`
                    }
                    allowfullscreen = 'false' />: null
                } 
            </div>
        )
    }

}

export default RequestWindy;