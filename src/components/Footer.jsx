import React from 'react'
import IconFacebook from './IconFacebook';
import IconInstagram from './IconInstagram';
import IconTikTok from './IconTikTok';
import LogoTmdb from './LogoTmdb';


function Footer() {


  return (
    <div className='footer'>
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
                <div>This web application uses the TMDB API but is not endorsed or certified by TMDB.</div>
            </div>
            <div className='footer-socialIcons'>
                <IconFacebook />
                <IconInstagram />
                <IconTikTok />
            </div>
        </div>
        <div className='footer-copyright'>Created by &copy;<span>Kasia Rosińska</span></div>
    </div>
  );
}

export default Footer;