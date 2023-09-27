import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import BarNavigation from './BarNavigation';
import soon from '/soon.png';
import Footer from './Footer';

function MyList() {

  const {mylist} = useContext(GlobalContext);


  return (
    <>
     <div>
        <BarNavigation />
        <div className='mylist'>
            <div className='mylist-lettering'>
                <h1>Moja lista</h1>
            </div>
            <div>
            {mylist.map(movie => (
                  <h1 key={movie.id}>{movie.title}</h1>
                ))}
            </div>
        </div>
     </div>
     <Footer />
    </>
  );
}

export default MyList;