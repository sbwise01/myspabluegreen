import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GreenManatee from './components/GreenManatee/GreenManatee';
import GreenNarwhal from './components/GreenNarwhal/GreenNarwhal';
import GreenWhale from './components/GreenWhale/GreenWhale';
function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <nav>
        <ul>
          <li><a href="/manatee">Manatee</a></li>
          <li><a href="/narwhal">Narwhal</a></li>
          <li><a href="/whale">Whale</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route path="/manatee">
            <GreenManatee />
          </Route>
          <Route path="/narwhal">
            <GreenNarwhal />
          </Route>
          <Route path="/whale">
            <GreenWhale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;