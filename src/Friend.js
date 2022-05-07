import React from "react";
import "./Friends.css";
import {Avatar} from "@material-ui/core";
import {AiFillSave,AiFillLike,AiFillDislike} from 'react-icons/ai'


{/* props :  */}
function Friend (props) {

    const clique = () => {
        //redirection vers la page de l'utilisateur

    }

    return (
        
        <button onClick={clique} className="amiClicable">
            <div className="corp">
                    <div className="avatar">
                        <Avatar src={props.avatar} />
                    </div>
                    <div className="titre">
                        <h3>{props.login}</h3>
                    </div>
            </div>
        </button>
        
    )
}

export default Friend