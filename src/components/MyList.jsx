import {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import BarNavigation from './BarNavigation';
import Footer from './Footer';
import SingleCardMyList from './SingleCardMyList';


function MyList() {

  const {mylist} = useContext(GlobalContext);


  return (
      <div className='mylist'>
        <BarNavigation />
        <div className='mylist-lettering'>
          <h1>Moja lista</h1>
        </div>
        <div className='mylist-main-container'>
          {mylist.length > 0 ? (
            <div className='mylist-films-container'>
              <div className='mylist-movies-counter'>
                <span>Mam filmów:</span> {mylist.length}
              </div>
              {mylist.map(movie => (
                <SingleCardMyList key={movie.id} movie={movie} type='mylist' />
                 ))}
            </div>
            ) : (
              <h2 className='mylist-empty-list'>Dodaj filmy do swojej listy!</h2>
            )}
        </div>  
        <Footer />
      </div>
  );
}

export default MyList;