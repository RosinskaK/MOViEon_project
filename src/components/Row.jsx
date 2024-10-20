import { useState, useEffect } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleImageInRow from "./SingleImageInRow";


function Row ( { title, fetchUrl, isLargeRow, isFilm, isSerial } ) {
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

//carousel settings
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3000, min: 2100 },
          items: 6,
          partialVisibilityGutter: 25,
          slidesToSlide: 3,
        },
        esktopL: {
          breakpoint: { max: 2100, min: 1720 },
          items: 5,
          partialVisibilityGutter: 30,
          slidesToSlide: 2,
        },
        desktop: {
          breakpoint: { max: 1720, min: 1375 },
          items: 4,
          partialVisibilityGutter: 30,
          slidesToSlide: 2,
        },
        tablet: {
          breakpoint: { max: 1375, min: 1050 },
          items: 3,
          partialVisibilityGutter: 35,
          slidesToSlide: 2,
        },
        tabletS: {
          breakpoint: { max: 1050, min: 645 },
          items: 2,
        },
        mobile: {
            breakpoint: { max: 645, min: 0 },
            items: 1,
        }
      };


      const singleImage = movies && movies.map(item => (
        <SingleImageInRow 
        key={item.id} 
        poster_path={item.poster_path}
        backdrop_path={item.backdrop_path}
        title={item.title} 
        name={item.name}
        release_date={item.release_date}
        first_air_date={item.first_air_date}
        overview={item.overview}
        
        isLargeRow={isLargeRow}
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
                removeArrowOnDeviceType={["mobile"]}
                >
                {
                    singleImage
                }
            </Carousel>
        </div>
    );
}

export default Row;
