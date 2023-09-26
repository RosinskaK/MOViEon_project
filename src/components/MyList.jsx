import React from 'react'
import BarNavigation from './BarNavigation';
import soon from '/soon.png';
import Footer from './Footer';

function MyList() {
  return (
    <>
     <div>
        <BarNavigation />
        <div className='mylist'>
            <div className='mylist-lettering'>
                <h2>Strona Moja Lista jest w trakcie tworzenia</h2>
                <h2>My List page is under construction</h2>
            </div>
            <img src={soon} alt='businessman' className='mylist-image'/>
        </div>
     </div>
     <Footer />
    </>
  );
}

export default MyList;