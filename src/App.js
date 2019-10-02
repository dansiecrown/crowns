import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const Hatspage = () => (
  <div>
    <h1>HAT'S PAGE</h1>
  </div>
);

function App() {
  return (
    <div > 
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/hats' component={Hatspage} />
      </Switch>

    </div>
  );
}

export default App;
