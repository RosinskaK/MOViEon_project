import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ContentModal from "./ContentModal";

const baseUrl = "http://image.tmdb.org/t/p/original/";

function SingleCardSearch({ movie }) {
  const { addMovieToMylist, mylist } = useContext(GlobalContext);

  let storedMovie = mylist.find(o => o.id === movie.id);

  const mylistDisabled = storedMovie ? true : false;


  return (
    <div className="card-main">
      <div className="card-image">
        {movie.poster_path ? (
          <img
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.title ? movie.title : movie.name}
          />
        ) : (
          <div className="card-no-image">
            <p>There is no image</p>
            <h2>Sorry!</h2>
          </div>
        )}
      </div>
      <h5 className="card-title">{movie.title ? movie.title : movie.name}</h5>
      <p className="card-description">
        <span>{movie.release_date ? "Film" : "Serial"}</span> | {""}
        {movie.release_date ? `${movie.release_date?.slice(0, 4)}` : ""}
        {movie.first_air_date ? `${movie.first_air_date?.slice(0, 4)}` : ""}
      </p>
      <div className="card-search-btns-main">
        <button 
        disabled={mylistDisabled}
        className="card-search-btn"
        onClick={() => addMovieToMylist(movie)}
        >
          + Moja lista
        </button>
        {/* <button>Zwiastun</button> */}
        <ContentModal>
          <button className="card-search-btn">Więcej</button>
        </ContentModal>
      </div>
    </div>
  );
}

export default SingleCardSearch;
