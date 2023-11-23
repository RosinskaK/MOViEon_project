import React, { useState, useEffect } from 'react';



function GenreMovieTv( {movieId} ) {
    const [genre, setGenre] = useState();

    const type = movieId?.release_date ? 'movie' : 'tv';

    const getGenres = async () => {

        await fetch((`https://api.themoviedb.org/3/genre/${type}/list?api_key=${import.meta.env.VITE_API_KEY}`), {
            method: 'GET',
            })
            .then( (res) => res.json())
            .then((data) => {
            if (!data.errors) {
                //console.log(data);
                setGenre(data.genres);
            } else {
                setGenre([]);
            }
            });
    };
    //console.log(genre);

    useEffect(() => {
        getGenres();
    }, []);


// limiting the number of movie/tv genres shown in the modal to two

    const generesToFind = movieId?.genre_ids.slice(0,2);
    //console.log(generesToFind);


//matching the movie/tv genre number to the genre name from the fetched genre list in useState

    const filteredData_1 = genre?.find((item) => item.id === generesToFind[0] );
    //console.log(filteredData_1);

    const filteredData_2 = genre?.find((item) => item.id === generesToFind[1] );
    //console.log(filteredData_2);


  return (
    <>
        {filteredData_1?.name ? filteredData_1?.name : ''} 
        {filteredData_2?.name ? `, ${filteredData_2?.name}` : ''}
    </>
  );
}

export default GenreMovieTv;
