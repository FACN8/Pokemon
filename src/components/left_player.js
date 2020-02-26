import React from 'react';
import { getPokemon } from "../utils/getPokemon";
import { getMove } from "../utils/getMove";

const LeftPlayer = ({ pokemon, setPokemon, setMove, turn }) => {
 
  React.useEffect(()=>{
    return;
  },[turn])
  return (
    <section className="player">
      <div id="leftPlayer">
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/mt/country_detail_pokemon.png"></img>
        <h1>mahmod</h1>
        <button onClick={()=>{if(turn==1) setMove({power: 20})}}>Hello</button>

      </div>
    </section>
  );
};

export default LeftPlayer;
