import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const baseUrl = "http://image.tmdb.org/t/p/original/";

//style for Content Modal
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
  borderRadius: '10px',
};

export default function ContentModal( {children, movieId} ) {
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




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
          <Box sx={style}>
            <Box className='modal-container'>
              <div className='modal-img-div'>
                {movieId.poster_path ? (
                  <img
                    src={`${baseUrl}${movieId.poster_path}`}
                    alt={movieId.title ||  movieId.name}
                  />
                  ) : (
                  <div className="modal-no-image">
                    <p>There is no image</p>
                    <h2>Sorry!</h2>
                  </div>
                )}
              </div>
              <div className='modal-main-content'>
                <h2 className='modal-main-title'>
                  {movieId.title || movieId.name || movieId.original_title}
                </h2>
                <h4 className='modal-year'>
                  {(movieId.release_date || movieId.first_air_date || '---').substring(0,4)} rok
                  <span> {movieId.vote_average?.toFixed(1)}/10 w TMDB</span>


                </h4>
                <div className='modal-description-container'>
                  <h5 className='modal-description'>
                    {movieId.overview}
                  </h5>
                </div>
                <button
                  className='modal-yt-btn'
                  variant='contained'
                  target='_blank'
                  href={`https://www.youtube.com/watch?v=${'video'}`} 
                >
                  Obejrzyj zwiastun
                </button>
              </div>
              <div className='modal-actors'></div>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}