import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import ContentModal from './ContentModal';


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function getData() {

            await fetch((`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`), {
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

    // ograniczanie ilości teksu w div do 150 znaków - patrz na dole
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

////////global context mylist stored movies
    const { addMovieToMylist, mylist } = useContext(GlobalContext);

    let storedMovie = mylist.find(o => o.id === movie.id);

    const mylistDisabled = storedMovie ? true : false;


  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                'http://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
            )`,
            backgroundPosition: 'top center',
        }}
    > 
        <div className='banner-contents'>
            <h1 className='banner-title'>{movie?.title || movie?.original_title}</h1>
            <div className='banner-btns'>
                <button 
                className='banner-btn'
                disabled={mylistDisabled}
                onClick={() => addMovieToMylist(movie)}
                >+ Moja lista</button>
                <ContentModal movieId={movie}>
                    <button className='banner-btn'>Więcej</button>
                </ContentModal>
            </div>
            <h1 className='banner-description'>{truncate(movie?.overview, 180)}</h1>
        </div>
        <div className='banner-fadeBottom'></div> 
    </header>
  );
}

export default Banner;