import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';
import Room from './views/app/Room';
import Home from './views/app/home';



function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>

          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/logout' component={Logout} exact />
          <Route path='/room' component={Room} exact />


        </Switch>
      </Router>

    </div>
  );
}

export default App;
