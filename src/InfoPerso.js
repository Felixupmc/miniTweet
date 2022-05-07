import React from 'react'
import "./InfoPerso.css"
import {Avatar} from "@material-ui/core";

function InfoPerso(props) {
  

    return (
        <div className='InfoPerso'>
            <div className="info">
                <div className='infoHead'>
                    <div className="avatar">
                        <Avatar src={props.avatar} />
                    </div>
                    <h2>{props.login}</h2>
                </div>
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
                <h5>{props.nbMe}</h5>
            </div>
        </div>
    );
}

export default InfoPerso;



