import React from "react";

export class Message{
    constructor(props){
        super(props);
    }




    render(){
        return (
           <div className=" messageview">
               <p>
                   {this.props.texte};

               </p>

               <p>
                   {this.props.date};
               </p>

               

           </div> 
        )
    }
   



}




export default Message;