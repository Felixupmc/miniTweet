import React, { Component } from "react";
import Message from "./Message";

export class Userview extends Component{
        constructor(props){
            super(props);
        }

    
    render(){ 
        return ( 
    <div className= " userview">
        <p>
            login = { this.props.login }
        <img>
        src = 'https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-10/determiner-age-lapin-173456.jpg'
        </img>   
        
        </p>
        <div> 
        {this.props.messages.map(
            m => <Message text = {m.text}
            createdAt = {m.createdAt} />
        )}

        </div>    
    </div>        
    
        )

    }
}


export default Userview;