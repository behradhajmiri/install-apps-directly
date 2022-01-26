import React from 'react';
import ShowApps from './components/ShowApps';
import './App.scss';
import sources from './sources/index';

function App() {
  return (
    <div className="main">
      {/* give sources to ShowApps */}
      <ShowApps sources={sources} />
    </div>
  );
};

export default App;
