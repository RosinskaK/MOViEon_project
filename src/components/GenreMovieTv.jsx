import React, { useState, useEffect } from 'react';



function GenreMovieTv( {movieId} ) {
    const [genre, setGenre] = useState();

    const type = movieId.release_date ? 'movie' : 'tv';

    const getGenres = async () => {

        await fetch((`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`), {
            method: 'GET',
            })
            .then( (res) => res.json())
            .then((data) => {
            if (!data.errors) {
                console.log(data);
                setGenre(data.genres);
            } else {
                setGenre([]);
            }
            });
    };

    console.log(genre);

    useEffect(() => {
        getGenres();
    }, []);



  return (
    <div>
        {
        movieId.genre_ids && movieId.genre_ids.slice(0,2).map((genre, i) => (
            <div key={i}> {genre} </div>
        ))
        }
        </div>
  )
}

export default GenreMovieTv;