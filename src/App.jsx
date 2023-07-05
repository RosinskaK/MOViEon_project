import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Search from './components/Search';


import './scss/App.scss';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/search'} element={<Search />} />
      </Routes>
    </Router>
  )
}

export default App
