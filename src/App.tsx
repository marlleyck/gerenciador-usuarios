import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/Home/Home';
import Header from './components/layout/Header/Header';
import NewUser from './components/NewUser/NewUser';

function App() {

  return (
    <>
      <Router>
        <Header />
        <NewUser />

        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App;
