import React from "react";

let Comments = (props) => {
    return(
        <div className="comment">
       <a href="/" className="avatar">
         <img alt="avatar" src={props.avatar}/>
         </a>

       <div className="content">
         <a href="/" className="author">{props.name}</a>
         <div className="metadata">
        <span>{props.timeago}</span>
         </div>
         <div className="text">{props.com}</div>
       
         </div> 
     </div>
    );
};
export default Comments;