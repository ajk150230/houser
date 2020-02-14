import React from 'react';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import House from './components/House'
import Wizard from './components/Wizard'
import { HashRouter, Link } from 'react-router-dom'
import routes from './routes'
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
