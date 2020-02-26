import React from 'react';
import { getPokemon } from "../utils/getPokemon";
import { getMove } from "../utils/getMove";

const RightPlayer = ({ pokemon, setPokemon, setMove, turn }) => {
  const [moves, setMoves] = React.useState([]);

  React.useEffect(()=>{
    //change pikachu to pokemon.name
    getPokemon('mew').then(res=>setPokemon(res));
  },[])

  React.useEffect(()=>{
  },[turn, pokemon])

  React.useEffect(()=>{
    if(!pokemon.moves) return;

    const movesPromises = [0,1,2,3].map((i) =>
      getMove(pokemon.moves[i].move.url.slice(-2,-1)) 
    )

    Promise.all(movesPromises).then(res => setMoves(res))
  },[pokemon])

  if(!moves[3]) return <h1>Loading...</h1>

  return (
    <section className="player">
      <h1>1st Player </h1>
      <div id="rightPlayer">
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/mt/country_detail_pokemon.png"></img>
        {console.log(moves[0])}
        <h1>Aysam</h1>
        <ul className="moves">
          <li>1<button onClick={()=>{if(turn==2) setMove({power: moves[0].power})}}>{moves[0].name}</button>
          </li>
          <li>2 <button onClick={()=>{if(turn==2) setMove({power: moves[1].power})}}>{moves[1].name}</button>
          </li>
          <li>3 <button onClick={()=>{if(turn==2) setMove({power: moves[2].power})}}>{moves[2].name}</button>
          </li>
          <li>4 <button onClick={()=>{if(turn==2) setMove({power: moves[3].power})}}>{moves[3].name}</button>
          </li>
        </ul>
        <img className="pokeball" src="./pokeball.png"></img>
      </div>
    </section>
  );
};

export default RightPlayer;
