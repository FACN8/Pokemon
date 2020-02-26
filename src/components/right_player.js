import React from 'react';

const RightPlayer = ({ setPokemon, setMove }) => {
  React.useEffect(()=>{
    return;
  },[])
  return (
    <section className="player">
      <div id="rightPlayer">
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/mt/country_detail_pokemon.png"></img>
        <h1>Aysam</h1>
        <button onClick={setMove({power: 20})}>Hello</button>

      </div>
    </section>
  );
};

export default RightPlayer;
