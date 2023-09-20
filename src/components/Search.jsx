import React, { useEffect, useState } from 'react'
//import { useNavigate } from "react-router-dom";
import BarNavigation from './BarNavigation';


function Search() {


    return (
    <div className='search-main'>
        <BarNavigation />
        <div className='search-container'>
          <div className='search-input'>
            <input type='text' placeholder='Szukaj'></input>
          </div>
          <div>

          </div>
        </div>
    </div>
  );
}

export default Search;