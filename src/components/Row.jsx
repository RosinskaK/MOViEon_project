import { useState, useEffect } from "react";




const baseUrl = 'http://image.tmdb.org/t/p/original/';



function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);   //tu pusta tablica czy null????????

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


    }, [fetchUrl]);   //to ma zostać w środku???

    //CZY funkcja asynchroniczna ma być poza useEffectem???????????????????????????



    console.log(movies);

    return (
        <div className="row-container">
            <h2>{title}</h2>
            <div className="row-posters">
                {
                    movies && movies.map(item => {
                       return <img 
                       className="row-poster"
                       key={item.id} 
                       src={`${baseUrl}${item.poster_path}`} 
                       alt={item.title} 
                       />
                    })
                }
            </div>
        </div>
    );
}

export default Row;