import React from 'react';
import { getPokemon } from '../utils/getPokemon';
import { getMove } from '../utils/getMove';

function Battle({ pokemon1, pokemon2, move }) {
  var p1 = 100,
    p2 = 100;
  var turn = true;
  React.useEffect(() => {
    if (move == null) return;
    if (turn) {
      p2 -= move.power;
    } else {
      p1 -= move.power;
    }
    turn = !turn;
    return;
  }, [move]);

  return (
    <div className="stats">
      <div className="lifeBar" id="lifeBar1">
        <img className="lifeHeart" src="./life.png"></img>
        <h3 id="firstPokemonLife">Pokemon - 1: {p1}%</h3>
      </div>
      <div className="lifeBar" id="lifeBar2">
        <h3 id="secondPokemonLife">Pokemon - 2: {p2}%</h3>
        <img className="lifeHeart" src="./life.png"></img>
      </div>
    </div>
  );
}

export default Battle;

// var width = (currentquestion+1)/maxquestions * 100;
// element.style.width = width + '%';
