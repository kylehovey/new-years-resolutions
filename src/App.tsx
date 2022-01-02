import React from 'react';
import './App.scss';

import resolutions from './resolutions';
import ResolutionList from './components/resolution_list';

const App: React.FC = () => (
  <div className="container">
    <div className="content">
      <header>
        <h1>Resolutions for 2022</h1>
      </header>
      <ResolutionList resolutions={resolutions} />
    </div>
  </div>
);

export default App;
