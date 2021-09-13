import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export interface IState {
  username: string,
  password: string
}

function App() {

  const [user, setUser] = useState<Array<{username: string|any, password:string|any}>>([]);
  
  console.log(user);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/sign-up">
            <SignUp user={user} setUser={setUser}/>
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser}/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard user={user} setUser={setUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
