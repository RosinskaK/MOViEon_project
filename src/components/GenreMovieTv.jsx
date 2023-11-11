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


    const generesToFind = movieId.genre_ids.slice(0,2);

    console.log(generesToFind);

    // const toFilter = generesToFind.map(num => parseInt(num));

    // console.log(toFilter);


    //const filter1 = {id: toFilter[0]};

    const filteredData1 = genre?.find((item) => item.id === generesToFind[0] );
    //Object.keys(filter1).every(key => item[key] === filter1[key])

    console.log(filteredData1);

    const filteredData2 = genre?.find((item) => item.id === generesToFind[1] );

    console.log(filteredData2);

  return (
    <>
        {filteredData1?.name}, {filteredData2?.name}
    </>
  );
}

export default GenreMovieTv;


//<div>
// {
//     movieId.genre_ids && movieId.genre_ids.slice(0,2).map((genre, i) => (
//         <div key={i}> {genre} </div>
//     ))
//     }
//     </div>