import React from 'react'
import "./InfoPerso.css"
import {Avatar} from "@material-ui/core";

function InfoPerso() {
  

    return (
        <div className='InfoPerso'>
            <div className="info">
                <div className="avatar">
                    <Avatar src="https://static.actu.fr/uploads/2021/10/portrait-jean-lassalle-gl-actu-toulouse-2.jpg" />
                </div>
                <h2>Jean LASSALE</h2>
            </div>
            <div className="info">
                <h4>Age : </h4>
                <h5>19</h5>
            </div>
            <div className="info">
                <h4>Followers : </h4>
                <h5>3</h5>
            </div>
            <div className="info">
                <h4>Messages : </h4>
                <h5>25</h5>
            </div>
        </div>
    );
}

export default InfoPerso;



