import React from "react";
import "./Friends.css";
import {Avatar} from "@material-ui/core";
import {AiFillSave,AiFillLike,AiFillDislike} from 'react-icons/ai'


{/* props :  */}
function Friends (props) {

    const clique = () => {
        //redirection vers la page de l'utilisateur

    }

    return (
        
        <div className="corp">
            <button onClick={clique}>
                <div className="avatar">
                    <Avatar src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
                </div>
                <div className="titre">
                    <h3>Félix</h3>
                </div>
            </button>
        </div>
        
    )
}

export default Friends