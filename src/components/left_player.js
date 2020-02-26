import React from 'react';

const LeftPlayer = () => {
  return (
    <section className="player">
      <h1>1st Player </h1>
      <div id="leftPlayer">
        <img src="https://assets.pokemon.com/assets/cms2/img/misc/countries/mt/country_detail_pokemon.png"></img>
        <h1>Mahmod</h1>
        <ul className="moves">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <img className="pokeball" src="./pokeball.png"></img>
      </div>
    </section>
  );
};

export default LeftPlayer;
