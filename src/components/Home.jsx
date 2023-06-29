import { useEffect, useState } from "react";

//import { useNavigate } from "react-router-dom";

import BarNavigation from './BarNavigation';
import Row from './Row';


//const API_KEY = 'c7dc4c7edb4a2f3d428d569c08985e07';


//https://api.themoviedb.org/3/movie/top_rated?api_key=c7dc4c7edb4a2f3d428d569c08985e07
//https://api.themoviedb.org/3/movie/upcoming?api_key=c7dc4c7edb4a2f3d428d569c08985e07
//https://api.themoviedb.org/3/movie/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07

//https://api.themoviedb.org/3/tv/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07
//https://api.themoviedb.org/3/tv/top_rated?api_key=c7dc4c7edb4a2f3d428d569c08985e07


function Home() {


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


    return (
        <div className="home-main-container">

            
            <BarNavigation />
            <h1>Hello again!!!</h1>
            <Row title='Najpopularniejsze' fetchUrl={'https://api.themoviedb.org/3/movie/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07'}/>
            <Row title='Najwyżej oceniane' fetchUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=c7dc4c7edb4a2f3d428d569c08985e07'/>
        </div>
    );
}

export default Home;