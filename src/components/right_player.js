import React from 'react';

const RightPlayer = ({ pokemon, setPokemon, setMove, turn }) => {
  React.useEffect(()=>{
    return;
  },[turn])
  return (
    <section className="player">
      <h1>2nd Player</h1>
      <div id="rightPlayer">
        <img src="https://sm.ign.com/t/ign_il/screenshot/g/grooky-is-/grooky-is-a-grass-type-chimp-pokemon-and-one-of-three-starte_jdxn.620.jpg"></img>
        <h1>Aysam</h1>
        <ul className="moves">
          <li>1<button onClick={()=>{if(turn==2) setMove({power: 20})}}>Hello</button>
          </li>
          <li>2 <button onClick={()=>{if(turn==2) setMove({power: 20})}}>Hello</button>
          </li>
          <li>3 <button onClick={()=>{if(turn==2) setMove({power: 20})}}>Hello</button>
          </li>
          <li>4 <button onClick={()=>{if(turn==2) setMove({power: 20})}}>Hello</button>
          </li>
        </ul>
        <img className="pokeball" src="./pokeball.png"></img>
      </div>
    </section>
  );
};

export default RightPlayer;
