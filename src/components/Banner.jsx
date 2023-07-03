import React, { useEffect, useState } from 'react'


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function getData() {

            await fetch(('https://api.themoviedb.org/3/movie/popular?api_key=c7dc4c7edb4a2f3d428d569c08985e07'), {
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
                    setMovie(data.results[Math.floor(Math.random() * data.results.length -1)]);
                })
                .catch(error => {
                    console.error(error);
                })
        }
        getData();

    }, []);

    console.log(movie);

  return (
    <header className='banner'> {/* background img */}
        <div className='banner-contents'>
            {/* title */}
            {/* div -> dwa buttony */}
            {/* description */}
        </div>
    </header>
  );
}

export default Banner