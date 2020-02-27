import React from 'react';
import { getPokemon } from "../utils/getPokemon";
import { getMove } from "../utils/getMove";

const LeftPlayer = ({ pokemon, setPokemon, setMove, turn }) => {
 
  React.useEffect(()=>{
    return;
  },[turn])
  return (
    <section className="player">
      <h1>1st Player </h1>
      <div id="leftPlayer">
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/mt/country_detail_pokemon.png"></img>
 
        <h1>Mahmod</h1>
        <ul className="moves">
          <li>1<button onClick={()=>{if(turn===1) setMove({power: 20})}}>Hello</button>
          </li>
          <li>2 <button onClick={()=>{if(turn===1) setMove({power: 20})}}>Hello</button>
          </li>
          <li>3 <button onClick={()=>{if(turn===1) setMove({power: 20})}}>Hello</button>
          </li>
          <li>4 <button onClick={()=>{if(turn===1) setMove({power: 20})}}>Hello</button>
          </li>
        </ul>
        <img className="pokeball" src="./pokeball.png"></img>
      </div>
    </section>
  );
};

export default LeftPlayer;
