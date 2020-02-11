import React from 'react';
import './app-src/App.css';

import TestMaker from './app-src/TestMaker';
import Test from './app-src/Test';

function App() {
  return (
    <>
      <header className="App-header">
        <h1> Welcome to Test Generator for ENGL 320 </h1>
      </header>

      <div className="App">

        <TestMaker/>

      </div>
    </>
  );
}

export default App;
