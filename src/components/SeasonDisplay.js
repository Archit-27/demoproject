import React from "react";
import './seasonDisplay.css';

let seasonConfig = {
    Summer : {
        text : "let's hit the beach!",
        iconName : 'sun'  
    },
    Winter : {
        text : "Burr, it's Cold",
        iconName : 'snowflake'  
    }
}

let getseason = (lat, month) => {
    if(month > 2 && month <9){
      return lat>0 ? 'Summer' : 'Winter' ;
    }else{
        return lat>0 ? 'Winter' : 'Summer' ;
    }
}

let SeasonDisplay = (props) =>{
    let season = getseason(props.lat, new Date().getMonth());
    let {text, iconName} = seasonConfig[season];   
   // let text = season === 'Winter' ? 'Burr, it is Chilly' : 'Lets go to the beach';   
   
   // let icon = season === 'Winter' ? 'snowflake' : 'sun' ; 
    return(
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}
export default SeasonDisplay;