import React, { useState, useEffect } from 'react';



function GenreMovieTv( {movieId} ) {
    const [genre, setGenre] = useState();

    const type = movieId?.title || movieId?.original_title ? 'movie' : 'tv';

    const getGenres = async () => {
        try {
            const response = await fetch((`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`), {
            method: 'GET',
            });
            const data = await response.json();
    
            if (!data.errors) {
                setGenre(data.genres);
            } else {
                setGenre([]);
            }
        } catch (error) {
            console.error('An error occurred while retrieving genres:', error);
            setGenre([]); 
        }
    };
    //console.log(genre);

    useEffect(() => {
        getGenres();
    }, []);


// limiting the number of movie/tv genres shown in the modal to two

    const genresToFind = movieId?.genre_ids?.slice(0,2);
    //console.log(generesToFind);


//matching the movie/tv genre number to the genre name from the fetched genre list in useState

    const filteredGenre_1 = genre?.find(item => genresToFind?.[0] !== undefined && item.id === genresToFind[0]);
    //console.log(filteredData_1);

    const filteredGenre_2 = genre?.find((item) => genresToFind?.[1] !==undefined && item.id === genresToFind[1] );
    //console.log(filteredData_2);


  return (
    <>
        {filteredGenre_1?.name ? filteredGenre_1.name : ''} 
        {filteredGenre_2?.name ? `, ${filteredGenre_2.name}` : ''}
    </>
  );
}

export default GenreMovieTv;
