import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


function MovieControls({ movie, type }) {

    const {removeMovieFromMylist} = useContext(GlobalContext);

  return (
    <div>
        <button
        onClick={() => removeMovieFromMylist(movie.id)}
        >
            Usuń z Mojej listy
        </button>
    </div>
  )
}

export default MovieControls;