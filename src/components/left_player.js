import React from 'react';
import { getPokemon } from '../utils/getPokemon';
import { getMove } from '../utils/getMove';

const LeftPlayer = ({ pokemon, setPokemon, setMove, turn, player }) => {
  const [moves, setMoves] = React.useState([]);

  React.useEffect(() => {
    getPokemon(pokemon.name).then(res => setPokemon(res));
  }, []);

  React.useEffect(() => {}, [turn, pokemon]);

  React.useEffect(() => {
    if (!pokemon.moves) return;

    const movesPromises = [0, 1, 2, 3].map(i => getMove(pokemon.moves[i].move.url.slice(-2, -1)));

    Promise.all(movesPromises).then(res => setMoves(res));
  }, [pokemon]);

  if (!moves[3]) return <h1>Loading...</h1>;

  return (
    <section className="player">
      <h1>{player}</h1>
      <div id="leftPlayer">
        <img alt="pokemon" src={pokemon.sprites.front_default}></img>
        <h1 className="pokeName">{pokemon.name}</h1>
        <ul className="moves">

          <li>
            <img
              onClick={() => (turn === 1 ? setMove({ power: moves[0].power, accuracy: moves[0].accuracy }) : '')}
              alt="pokgeball"
              className="pokeball"
              src="./pokeball.png"
            ></img>
            <span>{moves[0].name}</span>
          </li>
          <li>
            <img
              onClick={() => (turn === 1 ? setMove({ power: moves[1].power, accuracy: moves[1].accuracy }) : '')}
              alt="pokgeball"
              className="pokeball"
              src="./pokeball.png"
            ></img>
            <span>{moves[1].name}</span>
          </li>
          <li>
            <img
              onClick={() => (turn === 1 ? setMove({ power: moves[2].power, accuracy: moves[2].accuracy }) : '')}
              alt="pokgeball"
              className="pokeball"
              src="./pokeball.png"
            ></img>
            <span>{moves[2].name}</span>
          </li>
          <li>
            <img
              onClick={() => (turn === 1 ? setMove({ power: moves[3].power, accuracy: moves[3].accuracy }) : '')}
              alt="pokgeball"
              className="pokeball"
              src="./pokeball.png"
            ></img>
            <span>{moves[3].name}</span>
          </li>
        </ul>
      </div>
      <img className="characterTwo" src={pokemon.sprites.front_default}></img>

    </section>
  );
};

export default LeftPlayer;
