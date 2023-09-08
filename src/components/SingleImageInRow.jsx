import React from 'react'


const baseUrl = 'http://image.tmdb.org/t/p/original/';


function SingleImageInRow( {title, poster_path, backdrop_path, isLargeRow} ) {

  return (
    <div className="row-posters scroll-moz">
        <img 
          className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
          //className='row-poster'
          //src={`${baseUrl}${backdrop_path}`} 
          src={`${baseUrl}${isLargeRow ? poster_path : backdrop_path}`} 
          alt={title} 
        />
    </div>
  );
}

export default SingleImageInRow;





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