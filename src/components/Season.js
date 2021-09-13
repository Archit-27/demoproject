import React from "react";
import SeasonDisplay from "./SeasonDisplay";



export default class Season extends React.Component {
    constructor(props){
        super(props);
        this.state = { lat : null,long: null, locerror:''}
    }
        
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (postion) => {
                this.setState( {lat : postion.coords.latitude , long : postion.coords.longitude})
            },
            (err) => { console.log(err)
                this.setState( { locerror: err.message})
            }
        );
    }
    
    render(){
    
if(this.state.lat && this.state.long && !this.state.locerror){
    return( <div><SeasonDisplay lat={this.state.lat} long={this.state.long}/></div>)
    }
    if(!this.state.lat && !this.state.long && this.state.locerror){
        return <div>Error : {this.state.locerror}</div>
    }
        return <div>Loading</div>
    
        
    };
};
