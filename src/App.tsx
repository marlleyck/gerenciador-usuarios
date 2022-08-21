import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Home from './components/pages/Home/Home';
import Header from './components/layout/Header/Header';
import NewUser from './components/pages/NewUser/NewUser';
import EditUser from './components/pages/EditUser/EditUser';

import { API } from './types/API';

function App() {
  const [users, setUsers] = useState<API[]>([])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      const data = response.data
      setUsers(data)
    }

    fetchApi()
  }, [])

  return (
    <>
      <Router>
        <Link to='/' style={{textDecoration: 'none'}}> <Header /> </Link>

        <Routes>
          <Route path='/' element={ <Home users={users} setUsers={setUsers} /> } />

          <Route path='/newuser' element={ <NewUser users={users} setUsers={setUsers} /> } />

          <Route path='/edituser/:id' element={ <EditUser users={users} setUsers={setUsers} /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
