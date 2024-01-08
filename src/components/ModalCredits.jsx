import React, { useState, useEffect } from 'react';


const baseUrl = 'https://image.tmdb.org/t/p/w200/';

function ModalCredits( { movieId }) {
    const [credits, setCredits] = useState();

    const type = movieId.title || movieId.original_title ? 'movie' : 'tv';


    const getCredits = async () => {
      try {
        const response =await fetch((`https://api.themoviedb.org/3/${type}/${movieId.id}/credits?api_key=${import.meta.env.VITE_API_KEY}`), {
            method: 'GET',
            });
            const data = await response.json();
  
            if (!data.errors) {
              setCredits(data.cast);
            } else {
              setCredits([]);
            }
      } catch (error) {
          console.error('Credits:', error);
          setCredits([]);
      }
    };
    //console.log(credits);

    useEffect(() => {
        getCredits();
    }, []);


return (
    <div className="credits-container">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="credits-person">
        {credits && credits[index] ? (
          <>
            {credits[index].profile_path ? (
              <img
                src={`${baseUrl}/${credits[index].profile_path}`}
                alt={credits[index].name}
                className="credits-img"
              />
            ) : (
              <div className="credits-no-img">
                <p>Sorry! <br />no image</p>
              </div>
            )}
            <h6 className="credits-actor-name">{credits[index].name}</h6>
          </>
        ) : (
          <div className="credits-no-img">
            <p>Sorry! <br />no image</p>
          </div>
        )}
      </div>
    ))}
  </div>
);
}

export default ModalCredits;

  
