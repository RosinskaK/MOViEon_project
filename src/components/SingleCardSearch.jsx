import React from 'react'


const baseUrl = 'http://image.tmdb.org/t/p/original/';

function SingleCardSearch( {movie} ) {


  // backdrop_path   poster_path

  return (
    <div className='card-main'>
        <div className='card-image'>
            {movie.poster_path ? (
                <img
                src={`${baseUrl}${movie.poster_path}`} 
                alt={movie.title ? movie.title : movie.name}
                />
            ) : (
                <div className='card-no-image'>
                  <p>There is no image</p>
                  <h2>Sorry!</h2>
                </div>
            )}
        </div>
        <h5 className='card-title'>
          {movie.title ? movie.title : movie.name}
        </h5>
        <p className='card-description'>
          <span>{movie.release_date ? 'Film' : 'Serial'}</span> | {movie.release_date ? `${movie.release_date?.slice(0,4)}` : ""} 
          {movie.first_air_date ? `${movie.first_air_date?.slice(0,4)}` : ""}
        </p>
        <button>Ulubione</button>
    </div>
  )
}

export default SingleCardSearch;