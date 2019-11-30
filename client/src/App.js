import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import { UserList } from './components/UserList'
import { AddUser } from './components/AddUser'
 
import './App.css';

function App() {
  const [users, setUsers] = useState()
  const [rerender, setRerender] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => console.log(err))
  }, [rerender])
  return (
    <div className="App">
      <Route exact path='/' render={props => <UserList 
      {...props} 
      users={users}
      rerender={rerender}
      setRerender={setRerender}
      />} />
      <Route path='/adduser' render={props => <AddUser 
      {...props}
      rerender={rerender}
      setRerender={setRerender}
      /> } />
      <Route path='/edituser/:id' render={props => <AddUser
      {...props}
      rerender={rerender}
      setRerender={setRerender}
      />} />
    </div>
  );
}

export default App;
