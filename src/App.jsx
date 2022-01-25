import React from 'react';
import { Bazaar, Myket } from './components/ShowApps';
import './App.scss';

import bazaarSources from './sources/bazaar/index';
import myketSources from './sources/myket/index';

const App = function App() {
  return (
    <div className="main">
      <Bazaar src={bazaarSources[0]} />
      <Bazaar src={bazaarSources[1]} />
      <Bazaar src={bazaarSources[2]} />
      <Bazaar src={bazaarSources[3]} />
      <Myket src={myketSources[0]} />
      <Myket src={myketSources[1]} />
    </div>
  );
};

export default App;
