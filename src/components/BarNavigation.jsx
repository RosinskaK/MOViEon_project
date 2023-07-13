import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from "react-router-dom";


function BarNavigation () {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    useEffect(() =>{

        //nazwa dla funkcji żeby nie była anonimowa wtedy można prawidłowo użyć remove listenera
        const scrollListener = () => {
            if (window.scrollY > 100) {
                setShow(true); 
            } else setShow(false);
    }

        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
        
    }, []);


    const handleNavigateToSearch = () => {

        navigate('/search');
        return;
    }


    const handleNavigateHome = () => {

        navigate('/');
      return;
    }

    const handleNavigateMyList = () => {

        navigate('/mylist');
      return;
    }


    return (
        <div className={`nav-main-container ${show && 'nav-black'}`}>
            <div className="nav-left-icons">
                <h1 className="nav-logo">MOV<span>i</span>E<span>on</span></h1>
                <button onClick={handleNavigateHome} className="nav-left-icon nav-btns">Strona głowna</button>
                <button onClick={handleNavigateMyList} className="nav-left-icon nav-btns">Moja lista</button>
            </div>
            <div className="nav-right-icons">
                <button onClick={handleNavigateToSearch} className="nav-btn-search nav-btns">
                    {/* tu jest ikonka lupka */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 0 512 512" style={{fill: 'white'}}>
                    {/* <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </button>
                <h3 className="nav-hello">Hello!</h3>
            </div>
        </div>
    );
}

export default BarNavigation;