import React from 'react';
import './App.css';
import LeftPlayer from './components/left_player';
import RightPlayer from './components/right_player';
import Battle from './components/battle_stats';
import { getPokemon } from './utils/getPokemon';
import { getMove } from './utils/getMove';

function App() {
  const [pokemon1, setPokemon1] = React.useState({ name: 'ditto', life: 100 });
  const [pokemon2, setPokemon2] = React.useState({ name: 'ditto', life: 100 });
  const [p1Life, setP1Life] = React.useState(100);
  const [p2Life, setP2Life] = React.useState(100);
  const [move, setMove] = React.useState({ power: 0 });
  const [turn, setTurn] = React.useState(1);

  if (pokemon1 == null || pokemon2 == null) {
    return <div> Choose your pokemon</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Battle p1Life={p1Life} setP1Life={setP1Life} p2Life={p2Life} setP2Life={setP2Life} move={move} turn={turn} setTurn={setTurn} />

        <section className="battle">
          <LeftPlayer pokemon={pokemon1} setPokemon={setPokemon1} setMove={setMove} turn={turn} />
          <RightPlayer pokemon={pokemon2} setPokemon={setPokemon2} setMove={setMove} turn={turn} />
        </section>
      </header>
    </div>
  );
}

export default App;
