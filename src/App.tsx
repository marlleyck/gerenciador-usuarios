import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home/Home';
import Header from './components/layout/Header/Header';
import NewUserButton from './components/pages/NewUser/NewUserButton';
import NewUser from './components/pages/NewUser/NewUser';

function App() {

  return (
    <>
      <Router>
        <Link to='/' style={{textDecoration: 'none'}}> <Header /> </Link>

        <Routes>
          <Route path='/' element={ <Home Link={Link} /> } />

          <Route path='/newuser' element={ <NewUser /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
