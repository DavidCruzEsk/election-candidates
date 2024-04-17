import React from 'react';
import './index.css';

import Navbar from './components/Navbar.jsx';
import List from './components/List.jsx';

function App() {

  return (
    <div className="app-container">
      <Navbar />
      <List />
    </div>
  );
}

export default App;
