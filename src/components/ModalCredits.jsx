import React, { useState, useEffect } from 'react';


const baseUrl = 'https://image.tmdb.org/t/p/w200/';

function ModalCredits( { movieId }) {
    const [credits, setCredits] = useState();

    const type = movieId?.release_date ? 'movie' : 'tv';


    const getCredits = async () => {

        await fetch((`https://api.themoviedb.org/3/${type}/${movieId.id}/credits?api_key=${import.meta.env.VITE_API_KEY}`), {
            method: 'GET',
            })
            .then( (res) => res.json())
            .then((data) => {
            if (!data.errors) {
                //console.log(data);
                setCredits(data.cast);
            } else {
                setCredits([]);
            }
            });
    };

    //console.log(credits);

    useEffect(() => {
        getCredits();
    }, []);


  return (
    <div className='credits-container'>
        {credits && 
        <>
            <div className='credits-person'>
                {credits[0]?.profile_path ?
                (<img 
                    src={`${baseUrl}/${credits[0]?.profile_path}`}
                    alt={credits[0]?.name}
                    className='credits-img'
                />
                ) : (
                    <div className='credits-no-img'><p>Sorry! <br></br>no image</p></div>
                )}
                <h6 className='credits-actor-name'>{credits[0]?.name}</h6>
            </div>

            <div className='credits-person'>
                {credits[1]?.profile_path ?
                (<img 
                    src={`${baseUrl}/${credits[1]?.profile_path}`}
                    alt={credits[1]?.name}
                    className='credits-img'
                />   
                ) : (
                    <div className='credits-no-img'><p>Sorry! <br></br>no image</p></div>
                )}
                <h6 className='credits-actor-name'>{credits[1]?.name}</h6>
            </div>

            <div className='credits-person'>
                {credits[2]?.profile_path ?
                (<img 
                    src={`${baseUrl}/${credits[2]?.profile_path}`}
                    alt={credits[2]?.name}
                    className='credits-img'
                />
                ) : (
                    <div className='credits-no-img'><p>Sorry! <br></br>no image</p></div>
                )}
                <h6 className='credits-actor-name'>{credits[2]?.name}</h6>
            </div>
        </>
        }
    </div>
  );
}

export default ModalCredits;