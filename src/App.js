import React from 'react';
import './App.css';
import T10eHeader from './components/t10e-header';
import T10eSchedule from './components/t10e-schedule';

function App() {
  return (
    <div className="App">
      <T10eHeader />
      <T10eSchedule />
    </div>
  );
}

export default App;
