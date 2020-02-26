import React from 'react';
import './App.css';
import LeftPlayer from './components/left_player';
import RightPlayer from './components/right_player';
import Battle from './components/battle_stats';

function App() {
  const [pokemon1, setPokemon1] = React.useState(null);
  const [pokemon2, setPokemon2] = React.useState(null);
  const [move, setMove] = React.useState(null);
  return (

    <div className="App">
      <header className="App-header">
      <section className="battle">
      <LeftPlayer setPokemon={setPokemon1} setMove={setMove}/>
      <RightPlayer setPokemon={setPokemon2} setMove={setMove}/>
      </section>

      <Battle pokemon1={pokemon1} pokemon2={pokemon2} move={move}/>
      </header>
    </div>

  );
}

export default App;
