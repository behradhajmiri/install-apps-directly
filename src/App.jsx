import React from 'react';
import ShowApps from './components/ShowApps';
import './App.scss';
import sources from './sources/index';

const App = function App() {
  return (
    <div className="main">
      {/* give sources[...] to ShowApps as src  */}
      <ShowApps src={sources[5]} />
      <ShowApps src={sources[6]} />
      <ShowApps src={sources[3]} />
      <ShowApps src={sources[1]} />
      <ShowApps src={sources[0]} />
      <ShowApps src={sources[2]} />
      <ShowApps src={sources[4]} />
    </div>
  );
};

export default App;
