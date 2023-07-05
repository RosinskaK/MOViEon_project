import React, { useEffect, useState } from 'react'


function BarNavigation () {

    const [show, setShow] = useState(false);

    useEffect(() =>{

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true); 
            } else setShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav-main-container ${show && 'nav-black'}`}>
            <div className="nav-left-icons">
                <h1 className="nav-logo">MOV<span>i</span>E<span>on</span></h1>
                <button className="nav-left-icon nav-btns">Strona głowna</button>
                <button className="nav-left-icon nav-btns">Moja lista</button>
            </div>
            <div className="nav-right-icons">
                <button className="nav-btn-search nav-btns">
                
                    </button>
                <h3 className="nav-hello">Hello!</h3>
            </div>
        </div>
    );
}

export default BarNavigation;