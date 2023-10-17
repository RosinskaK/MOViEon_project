import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


function MovieControls({ movie, type }) {

    const {removeMovieFromMylist} = useContext(GlobalContext);

  return (
    <div className='moviecontrols-main'>
        <button
        className='moviecontrols-btn'
        onClick={() => removeMovieFromMylist(movie.id)}
        >
          - Moja lista
        </button >
        {/* <button>Zwiastun</button> */}
        <button className='moviecontrols-btn'>Więcej</button>
    </div>
  )
}

export default MovieControls;