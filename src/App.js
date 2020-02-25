import React from 'react';
import './App.css';
import LeftPlayer from './components/left_player';
import RightPlayer from './components/right_player';

function App() {
  return (
    <section className="battle">
      <LeftPlayer />
      <RightPlayer />
    </section>
  );
}

export default App;
