import { useState, useEffect } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleImageInRow from "./SingleImageInRow";


//const baseUrl = 'http://image.tmdb.org/t/p/original/';


function Row({ title, fetchUrl, isLargeRow, isFilm, isSerial }) {

    const [movies, setMovies] = useState([]);   

    useEffect(() => {

        async function getData() {

            await fetch((fetchUrl), {
                method: 'GET',
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error(res.message);
                    }
                })
                .then(data => {
                    //console.log(data);
                    setMovies(data.results);
                })
                .catch(error => {
                    console.error(error);
                })
        }
        getData();

    }, [fetchUrl]);


    console.log(movies);


    //do karuzeli
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 2000 },
          items: 5,
          partialVisibilityGutter: 40,
          slidesToSlide: 2,
        },
        largDesktop: {
            breakpoint: { max: 2000, min: 1500 },
            items: 4,
            partialVisibilityGutter: 40,
            slidesToSlide: 2,
        },
        desktop: {
          breakpoint: { max: 1500, min: 1150 },
          items: 3,
          partialVisibilityGutter: 20,
        },
        tablet: {
          breakpoint: { max: 1150, min: 500 },
          items: 2,
          partialVisibilityGutter: 100,
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 1,
          partialVisibilityGutter: 20,
        }
      };


      const singleImage = movies && movies.map(item => (
        <SingleImageInRow 
        //className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
        key={item.id} 
        //src={`${baseUrl}${isLargeRow ? item?.poster_path : item?.backdrop_path}`} 
        poster_path={item.poster_path}
        backdrop_path={item.backdrop_path}
        title={item.title} 
        isLargeRow={isLargeRow}

        name={item.name}
        release_date={item.release_date}
        first_air_date={item.first_air_date}
        overview={item.overview}
        isFilm={isFilm}
        isSerial={isSerial}

        movie={item}
        />
     ));

    return (
        <div className="row-container">
            <h2 className="row-title">{title}</h2>
            <Carousel 
                responsive={responsive}
                partialVisible={true}
                >
                {
                    singleImage
                }
            </Carousel>
        </div>
    );
}

export default Row;






           
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


    // useEffect( () => {

    //     async function fetchData() {
    //         const request = await (fetchUrl);
    //         console.log(request.results);
    //         return request;
    //     }
    //     fetchData();

    // },[]);

    // async function getData() {
    //     await fetch(fetchUrl)
    //         .then((res) => res.json())
    //         .then((data) => setMovies(data.results));
    // }

    // useEffect(() => {

    //     getData();

    // }, []);