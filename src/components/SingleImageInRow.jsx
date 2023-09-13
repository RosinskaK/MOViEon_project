import React from 'react'


const baseUrl = 'http://image.tmdb.org/t/p/original/';


function SingleImageInRow( {title, poster_path, backdrop_path, isLargeRow, name, release_date, first_air_date, overview, isFilm,isSerial} ) {

  return (
    <div className="row-posters scroll-moz">
      <div className={`row-poster ${isLargeRow && 'row-posterLarge'}`}>
        <img 
          className={`single-image ${isLargeRow && 'single-imageLarge'}`}
          //className='row-poster'
          //src={`${baseUrl}${backdrop_path}`} 
          src={`${baseUrl}${isLargeRow ? poster_path : backdrop_path}`} 
          alt={isFilm ? title : name} 
        />
        <div className={`single-image-hover ${isLargeRow && 'single-image-hoverLarge'}`}>
          <h3 className='image-hover-title'>{isFilm ? title : name} {isSerial ? name : ""}</h3>
          <p className='image-hover-type-date'>
            {release_date ? 'Film' : 'Serial'} | {isFilm ? release_date : first_air_date} {isSerial ? first_air_date : ""}
            </p>
          <p className='image-hover-overview'>{overview}</p>
          <button className='image-hover-btn'>Ulubione</button>
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