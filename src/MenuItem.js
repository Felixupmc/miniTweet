import React from 'react';
import './MenuItem.css'

function MenuItem( props ) {
  return (
    <div className={`MenuItem ${props.active && 'MenuItem--active'}` } >
        <div className='Icon'>
          <props.Icon color="#1DA1F2" fontSize="2rem"/>
        </div>
        <h2>{props.text}</h2>
    </div>
  );
}

export default MenuItem;