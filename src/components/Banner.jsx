import React, { useEffect, useState } from 'react'


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function getData() {

            await fetch(('https://api.themoviedb.org/3/movie/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07'), {
                method: 'GET',
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error(res.message);
                    }
                })
                .then(data => {
                    //console.log(data);
                    setMovie(data.results[Math.floor(Math.random() * data.results.length -1)]);
                })
                .catch(error => {
                    console.error(error);
                })
        }
        getData();

    }, []);

    console.log(movie);

    // ograniczanie ilości teksu w div
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }


  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                'http://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
            )`,
            backgroundPosition: 'center center',
        }}
    > 
        <div className='banner-contents'>
            <h1 className='banner-title'>{movie?.title || movie?.original_title}</h1>
            <div className='banner-btns'>
                <button className='banner-btn'>Oglądaj</button>
                <button className='banner-btn'>Dodaj do ulubionych</button>
            </div>

            <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
            
        </div>
    </header>
  );
}

export default Banner