import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import ContentModal from './ContentModal';


const baseUrl = 'http://image.tmdb.org/t/p/original';

// limiting the amount of text in a div to n characters - see below
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}


function SingleImageInRow( {title, poster_path, backdrop_path, isLargeRow, name, release_date, first_air_date, overview, isFilm,isSerial, movie} ) {

  const { addMovieToMylist, mylist } = useContext(GlobalContext);

  let storedMovie = mylist.some(o => o.id === movie?.id && movie?.id !== undefined);

  const mylistDisabled = storedMovie ? true : (movie?.id === undefined) ? true : false;


  return (
    <div className="row-posters scroll-moz">
      <div className={`row-poster ${isLargeRow && 'row-posterLarge'}`}>
        {backdrop_path !== null ? 
        <img 
          className={`single-image ${isLargeRow && 'single-imageLarge'}`}
          src={`${baseUrl}${isLargeRow ? poster_path : backdrop_path}`} 
          alt={isFilm ? title : name} 
        /> : poster_path !== null ? 
        <img 
          className={`single-image ${isLargeRow && 'single-imageLarge'}`}
          src={`${isLargeRow ? `${baseUrl}${poster_path}` : "/NoImage.png"}`} 
        /> 
        : 
        <img 
          src="/NoImage.png" 
          className={`single-image ${isLargeRow && 'single-imageLarge'}`}
        />}
        <div className={`single-image-hover ${isLargeRow && 'single-image-hoverLarge'}`}>
          <h3 className='image-hover-title'>{isFilm ? title : name} {isSerial ? name : ""}</h3>
          <p className='image-hover-type-date'>
            <span>{title ? 'Film' : 'Serial'}</span> | {release_date ? `${release_date?.slice(0,4)}` : ""} 
            {first_air_date ? `${first_air_date?.slice(0,4)}` : ""}
            </p>
          <p className={`image-hover-overview ${isLargeRow && 'single-hover-overviewLarge'}`}>
              {isLargeRow ? truncate(overview, 460) : truncate(overview, 90)}
            </p>
          <div className='btn-div-hover'>
            <button 
              className='image-hover-btn'
              disabled={mylistDisabled}
              onClick={() => addMovieToMylist(movie)}
            > + Moja lista
            </button>
            <ContentModal movieId={movie}>
              <button className='image-hover-btn'>Więcej</button>
            </ContentModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleImageInRow;
