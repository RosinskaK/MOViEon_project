import React, { useEffect, useState } from 'react'
import ModalCredits from './ModalCredits';
import GenreMovieTv from './GenreMovieTv';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import YouTubeIcon from '@mui/icons-material/YouTube';




const baseUrl = "http://image.tmdb.org/t/p/w500/";

//styles for Content Modal
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
  p: 4,
  borderRadius: '15px',
};

//styles fo Button MUI
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

export default function ContentModal( {children, movieId} ) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState();

  const type = movieId.release_date ? 'movie' : 'tv';
  const type2 = movieId.release_date ? 'Film' : 'Serial';

  const getVideo = async () => {

    await fetch((`https://api.themoviedb.org/3/${type}/${movieId.id}/videos?api_key=${import.meta.env.VITE_API_KEY}`), {
                method: 'GET',
            })
            .then( (res) => res.json())
            .then((data) => {
            if (!data.errors) {
              //console.log(data);
              setVideo(data.results[0]?.key);
            } else {
              setVideo([]);
            }
          });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
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
          <Box sx={style}>
            <Box className='modal-container'>
              {/* <div className='modal-img-upright'> */}
                {movieId.poster_path ? (
                  <img
                    src={`${baseUrl}${movieId.poster_path}`}
                    alt={movieId.title ||  movieId.name}
                    className='modal-img-upright'
                    style={{borderRadius: '7px'}}
                  />
                  ) : (
                  <div className="modal-no-image">
                    <p>There is no image</p>
                    <h2>Sorry!</h2>
                  </div>
                )}
              {/* </div> */}
              {/* <div className='modal-img-horizontally'> */}
                {movieId.backdrop_path ? (
                  <img
                    src={`${baseUrl}${movieId.backdrop_path}`}
                    alt={movieId.title ||  movieId.name}
                    className='modal-img-horizontally'
                    style={{borderRadius: '7px'}}
                  />
                  ) : (
                  <div className="modal-no-image">
                    <p>There is no image</p>
                    <h2>Sorry!</h2>
                  </div>
                )}
              {/* </div> */}


              <div className='modal-main-content'>
                <div>
                  <h1 className='modal-main-title'>
                    {movieId.title || movieId.name || movieId.original_title}
                  </h1>
                  <h4 className='modal-year'>
                    <span className='modal-year-type'>
                      {type2}</span> z {(movieId.release_date || movieId.first_air_date || '---').substring(0,4)}
                    <span className='modal-year-genres'><GenreMovieTv movieId={movieId}/> </span>
                  </h4>
                  <h5 className='modal-votes'> ocena <span>{movieId.vote_average?.toFixed(1)}</span>/10 w TMDB</h5>
                </div>

                <div className='modal-description-container'>
                  <h5 className='modal-description'>
                    {movieId.overview}
                  </h5>
                </div>
                <Button
                  sx={btnYt}
                  //startIcon={<YouTubeIcon />}
                  className='modal-yt-btn'
                  startIcon={<YouTubeIcon  size='medium' />}
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