import { useState, useEffect } from "react";

function Row ({title, fetchUrl}) {

    const [movies, setMovies] = useState([]);

    // useEffect( () => {

    //     async function fetchData() {
    //         const request = await (fetchUrl);
    //         console.log(request.results);
    //         return request;
    //     }
    //     fetchData();

    // },[]);


  //  czy to ma być funkcja asynchroniczna????





  
        useEffect( () => {

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
        

    }, []);   //to ma zostać???


    console.log(movies);

    return (
        <div className="row-container">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(item => {
                    <img src={item.poster_path} alt={item.title} />
                })}
                
            </div>
        </div>
    );
}

export default Row;