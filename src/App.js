import React from 'react';
import './App.css';
import LeftPlayer from './components/left_player';
import RightPlayer from './components/right_player';

function App() {
  return (
    <div>
      <h1 id="temp">Hi</h1>
      <section className="battle">
        <LeftPlayer />
        <RightPlayer />
      </section>
    </div>
  );
}

export default App;
