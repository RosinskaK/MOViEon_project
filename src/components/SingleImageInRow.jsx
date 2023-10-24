import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";


const baseUrl = 'http://image.tmdb.org/t/p/original/';

// ograniczanie ilości teksu w div do określonej ilości znaków - patrz na dole
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}


function SingleImageInRow( {title, poster_path, backdrop_path, isLargeRow, name, release_date, first_air_date, overview, isFilm,isSerial, movie} ) {

///////////////////////////////////////////
const { addMovieToMylist, mylist } = useContext(GlobalContext);

  let storedMovie = mylist.find(o => o.id === movie.id);

  const mylistDisabled = storedMovie ? true : false;

///////////////////////////////////////////

  return (
    <div className="row-posters scroll-moz">
      <div className={`row-poster ${isLargeRow && 'row-posterLarge'}`}>
        <img 
          className={`single-image ${isLargeRow && 'single-imageLarge'}`}
          src={`${baseUrl}${isLargeRow ? poster_path : backdrop_path}`} 
          alt={isFilm ? title : name} 
        />
        <div className={`single-image-hover ${isLargeRow && 'single-image-hoverLarge'}`}>
          <h3 className='image-hover-title'>{isFilm ? title : name} {isSerial ? name : ""}</h3>
          <p className='image-hover-type-date'>
            <span>{release_date ? 'Film' : 'Serial'}</span> | {release_date ? `${release_date?.slice(0,4)}` : ""} 
            {first_air_date ? `${first_air_date?.slice(0,4)}` : ""}
            </p>
          <p className={`image-hover-overview ${isLargeRow && 'single-hover-overviewLarge'}`}>
              {isLargeRow ? overview : truncate(overview, 90)}
            </p>
          <div className='btn-div-hover'>
            {/* <button className='image-hover-btn single-img-btn-one'>Zwiastun</button> */}
            <button 
              className='image-hover-btn'
              disabled={mylistDisabled}
              onClick={() => addMovieToMylist(movie)}
            >+ Moja lista
            </button>
            <button className='image-hover-btn single-img-btn-three'>Więcej</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleImageInRow;


//release_date - jest do filmu
//first_air_date - jest do serialu
//name jest do serialu a title jest do filmu



//return (
//     <div className="row-container">
//     <h2 className="row-title">{title}</h2> 
//     <div className="row-posters scroll-moz">
//         {
//             movies && movies.map(item => {
//                return <img 
//                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
//                key={item.id} 
//                src={`${baseUrl}${isLargeRow ? item?.poster_path : item?.backdrop_path}`} 
//                alt={item.title} 
//                />
//             })
//         }
//     </div>
// </div>
// );