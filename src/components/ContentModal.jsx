import React, { useEffect, useState } from 'react'
import ModalCredits from './ModalCredits';
import GenreMovieTv from './GenreMovieTv';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';


const baseUrl = "http://image.tmdb.org/t/p/original/";


//styles for ContentModal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '80%',
  bgcolor: '#27282b',
  //border: '1px solid #000',
  boxShadow: 24,
  color: 'whitesmoke',
  p: 3,
  borderRadius: '15px',
};

//styles fo Button MUI - link to Youtube
const btnYt = {
  color: '#ff493b',
  borderRadius: '30px',
  border: '3px solid #ff493b',
  p: '6px 10px',
  ":hover": {
    border: '3px solid #ff493b',
    bgcolor: '#ff493b',
    color: 'whitesmoke',
  },
};

export default function ContentModal( { movieId, children } ) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const type = movieId.title || movieId.original_title ? 'movie' : 'tv';       
  const type2 = movieId.title || movieId.original_title ? 'Film' : 'Serial';  


  //preventing forwarding undefined value via props 
  let movieSeries = movieId.id === undefined ? 35 : movieId.id;


  //console.log(movieId);
  
  useEffect(() => {
    async function getVideo() {

    await fetch((`https://api.themoviedb.org/3/${type}/${movieSeries}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`), {
                method: 'GET',
            })
            .then( (res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw new Error(res.message);
              }
            })
            .then((data) => {
            if (!data.errors) {
              //console.log(data);
              setVideo(data.results[0]?.key);
            } else {
              setVideo([]);
            }
          })
          .catch(error => {
            console.error(error + "Catch of props passing undefined value in ContentModal");
        })
  }
      getVideo();
  }, []);

  //console.log(video);


  return (
    <div>
      <Box onClick={handleOpen} >
        {children}
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {children && (
          <Box sx={style} >
            <Box className='modal-container'>
                {movieId?.poster_path ? (
                  <img
                    src={`${baseUrl}${movieId?.poster_path}`}
                    alt={movieId?.title ||  movieId?.name}
                    className='modal-img-upright'
                    style={{borderRadius: '7px'}}
                  />
                  ) : (
                  <div className="modal-no-image-upright">
                    <p>There is no image</p>
                    <h2>Sorry!</h2>
                  </div>
                )}
                {movieId?.backdrop_path ? (
                  <img
                    src={`${baseUrl}${movieId?.backdrop_path}`}
                    alt={movieId?.title ||  movieId?.name}
                    className='modal-img-horizontally'
                    style={{borderRadius: '7px'}}
                  />
                  ) : (
                  <div className="modal-no-image-horizontally">
                    <p>There is no image</p>
                    <h2>Sorry!</h2>
                  </div>
                )}

              <div className='modal-main-content'>
                <div>
                  <h1 className='modal-main-title'>
                    {movieId.title || movieId.name || movieId.original_title}
                  </h1>
                  <h4 className='modal-year'>
                    <span className='modal-year-type'>
                      {type2}</span> z {(movieId?.release_date || movieId?.first_air_date || '--').substring(0,4)}
                    <span className='modal-year-genres'><GenreMovieTv movieId={movieId}/> </span>
                  </h4>
                  <h5 className='modal-votes'> ocena <span>{movieId.vote_average?.toFixed(1)}</span>/10 w TMDB</h5>
                </div>
                <div className='modal-description-container'>
                  <h5 className='modal-description'>
                    {movieId?.overview !== '' ? movieId.overview : 'Sorry, there is no description...'}
                  </h5>
                </div>
                <Button
                  sx={btnYt}
                  className='modal-yt-btn'
                  startIcon={<YouTubeIcon />}
                  color='error'
                  size='small'
                  variant='outlined'
                  target='_blank'
                  href={`https://www.youtube.com/watch?v=${video}`} 
                >
                  Zobacz zwiastun
                </Button>
              </div>
              <div className='modal-actors'>
                    <ModalCredits movieId={movieId} />
              </div>
            </Box>
          </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}