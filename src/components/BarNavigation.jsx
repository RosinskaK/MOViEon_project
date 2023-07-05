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


    return (
        <div className={`nav-main-container ${show && 'nav-black'}`}>
            <div className="nav-left-icons">
                <h1 className="nav-logo">MOV<span>i</span>E<span>on</span></h1>
                <button onClick={handleNavigateHome} className="nav-left-icon nav-btns">Strona głowna</button>
                <button className="nav-left-icon nav-btns">Moja lista</button>
            </div>
            <div className="nav-right-icons">
                <button onClick={handleNavigateToSearch} className="nav-btn-search nav-btns">
                        W
                </button>
                <h3 className="nav-hello">Hello!</h3>
            </div>
        </div>
    );
}

export default BarNavigation;