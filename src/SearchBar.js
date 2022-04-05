import React from 'react';
import './SearchBar.css'
import {AiOutlineSearch} from 'react-icons/ai'

function SearchBar( props ) {
  return (
    <div className='search' >
        <div className='searchIcon'>
          <AiOutlineSearch color="#1DA1F2" fontSize="2rem"/>
        </div>
        <input placeholder="Chercher utilisateur, message, ..."  type="text" />
    </div>
  );
}

export default SearchBar;