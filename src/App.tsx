import React from 'react';
import Translate from './components/Translate';
import './App.scss';
import src from './src';


function App() {
  return (
    <div>
      <Translate src={src} />
    </div>
  );
}

export default App;
