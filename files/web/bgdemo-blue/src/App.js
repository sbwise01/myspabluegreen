import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import BlueManatee from './components/BlueManatee/BlueManatee';
import BlueNarwhal from './components/BlueNarwhal/BlueNarwhal';
import BlueWhale from './components/BlueWhale/BlueWhale';
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
            <BlueManatee />
          </Route>
          <Route path="/narwhal">
            <BlueNarwhal />
          </Route>
          <Route path="/whale">
            <BlueWhale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;