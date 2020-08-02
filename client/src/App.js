import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    M.AutoInit();
  })

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
