import React from 'react'
import IconFacebook from './IconFacebook';
import IconInstagram from './IconInstagram';
import IconTikTok from './IconTikTok';
import LogoTmdb from './LogoTmdb';


function Footer() {


  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-logos'>
                <div className='footer-logo-1'>
                    <LogoTmdb />
                </div>
                <div className='footer-logo-2'>
                    <h1 className="footer-logo-movieon">MOV<span>i</span>E<span>on</span></h1>
                </div>
            </div>
            <div className='footer-descriptions'>
                <p>This web application uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </div>
            <div className='footer-socialIcons'>
                <IconFacebook />
                <IconInstagram />
                <IconTikTok />
            </div>
        </div>
        <div className='footer-copyright'>Created by <span>&copy;Kasia Rosińska</span></div>
    </footer>
  );
}

export default Footer;