import React, { useEffect, useState } from 'react'
//import { useNavigate } from "react-router-dom";
import BarNavigation from './BarNavigation';
import SingleCardSearch from './SingleCardSearch';
import Footer from './Footer';


function Search() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);


  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then( (res) => res.json())
    .then((data) => {
      if (!data.errors) {
        setResults(data.results);
      } else {
        setResults([]);
      }
    });

  };

  console.log(results);

  return (
    <>
     <div className='search-main'>
        <BarNavigation />
        <div className='search-container'>
          <div className='search-input'>
            <input 
            name='search'
            type='text' 
            placeholder='Szukaj filmów'
            value={query}
            onChange={onChange}
            ></input>
          </div>
          <div className='search-results-container'>
            {results.length > 0 ? (
              results.map(movie => (
                <SingleCardSearch key={movie.id} movie={movie} />
                ))
            ) : ( 
            <h2 className='search-empty-results'>Szukaj tutaj swoich ulubionych filmów!</h2>
              )
            }
          </div>
        </div>
     </div>
     <Footer/>
    </>
  );
}

export default Search;