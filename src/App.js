import React from 'react';

import './App.css';
import Home from './components/Home';
function App() {
  return (
    <React.Fragment>
      <div className="header">
        <span>Outlook Mail</span>
      </div>
      <Home></Home>
    </React.Fragment>
  );
}

export default App;
