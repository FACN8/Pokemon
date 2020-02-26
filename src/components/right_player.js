import React from 'react';

const RightPlayer = ({ pokemon, setPokemon, setMove, turn }) => {
  React.useEffect(()=>{
    return;
  },[turn])
  return (
    <section className="player">
      <div id="rightPlayer">
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/mt/country_detail_pokemon.png"></img>
        <h1>Aysam</h1>
        <button onClick={()=>{if(turn==2) setMove({power: 20})}}>Hello</button>

      </div>
    </section>
  );
};

export default RightPlayer;
