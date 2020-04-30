import React from 'react';
class Story extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentWebcams: {}
        }
        this.changeWebcam = this.changeWebcam.bind(this)
    }
    componentDidMount(){
        this.changeWebcam();
    }
    componentDidUpdate(prevprops){
        const webcams = this.props;
        if(webcams !== prevprops){
            this.changeWebcam()
        }
    }
    changeWebcam(){
        const webcams = this.props;
        this.setState({currentWebcams: webcams})

    }
    render(){
        const {webcams} = this.props;
      return(

        <div>
            <h1>title</h1>
        </div>
    )
 
    }
    
}

export default Story;