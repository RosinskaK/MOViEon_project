import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import ContentModal from './ContentModal';

//scss classes for MovieControls are in _singleCardSearch.scss


function MovieControls({ movie }) {

    const {removeMovieFromMylist} = useContext(GlobalContext);


  return (
    <div className='moviecontrols-main'>
        <button
        className='moviecontrols-btn'
        onClick={() => removeMovieFromMylist(movie?.id)}
        >
          - Moja lista
        </button >
        <ContentModal movieId={movie}>
          <button className='moviecontrols-btn'>Więcej</button>
        </ContentModal>
    </div>
  );
}

export default MovieControls;
