import { useEffect, useState } from "react";

//import { useNavigate } from "react-router-dom";

import BarNavigation from "./BarNavigation";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./Footer";

//const API_KEY = 'c7dc4c7edb4a2f3d428d569c08985e07';

//https://api.themoviedb.org/3/movie/top_rated?api_key=c7dc4c7edb4a2f3d428d569c08985e07
//https://api.themoviedb.org/3/movie/upcoming?api_key=c7dc4c7edb4a2f3d428d569c08985e07
//https://api.themoviedb.org/3/movie/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07

//https://api.themoviedb.org/3/tv/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07
//https://api.themoviedb.org/3/tv/top_rated?api_key=c7dc4c7edb4a2f3d428d569c08985e07

function Home() {
  return (
    <div className="home-main-container">
      <BarNavigation />
      <Banner />
      <Row
        title="Najpopularniejsze filmy"
        fetchUrl={
          "https://api.themoviedb.org/3/movie/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07"
        }
        isLargeRow
      />
      <Row
        title="Najwyżej oceniane filmy"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=c7dc4c7edb4a2f3d428d569c08985e07"
      />
      <Row
        title="Nadchodzące premiery filmowe"
        fetchUrl="https://api.themoviedb.org/3/movie/upcoming?api_key=c7dc4c7edb4a2f3d428d569c08985e07"
      />
      <Row
        title="Najpopularniejsze w TV"
        fetchUrl="https://api.themoviedb.org/3/tv/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07"
      />
      <Row
        title="Najwyżej oceniane w TV"
        fetchUrl="https://api.themoviedb.org/3/tv/top_rated?api_key=c7dc4c7edb4a2f3d428d569c08985e07"
      />
      <Footer />
    </div>
  );
}

export default Home;

// const [movie, setMovies] = useState(null);

// useEffect( () => {
//     fetch('https://api.themoviedb.org/3/movie/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07', {
//         method: 'GET',
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 throw new Error(res.message);
//             }
//         })
//         .then(data => {
//             console.log(data);
//             setMovies(data);
//         })
//         .catch(error => {
//             console.error(error);
//         })

// }, []);

//   console.log(movie);

// return (
//         <>
//             {
//                 !data && <h1>Ładowanie danych...</h1>
//             }
//             {
//                 data && <h1>{data}</h1>
//             }
//         </>
//     )
