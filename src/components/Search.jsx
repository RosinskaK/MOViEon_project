import React, { useEffect, useState } from 'react'
//import { useNavigate } from "react-router-dom";
import BarNavigation from './BarNavigation';


function Search() {


    return (
    <div className='search-main'>
        <BarNavigation />
        <div className='search-container'>
          <div className='search-input'>
            <input type='text' placeholder='Szukaj filmów'></input>
          </div>
          <div className='search-results-container'>
            Teraz
          </div>
        </div>
    </div>
  );
}

export default Search;