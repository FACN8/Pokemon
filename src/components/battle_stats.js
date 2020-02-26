
import React from "react";
import { getPokemon } from "../utils/getPokemon";
import { getMove } from "../utils/getMove";

function Battle({p1Life, setP1Life, p2Life, setP2Life, move, turn, setTurn}) {
  React.useEffect(() => {
    if(move===null) return;
    if(turn===1){
        setTurn(2)
        setP2Life(p2Life-move.power)
    }
    else{
        setTurn(1)
        setP1Life(p1Life-move.power)
    }
    return;
  }, [move]);
  return (
    <div>
    <div id="lifeBar1"> 
            <div id="firstPokemonLife">Life of pokemon1: {p1Life}</div> 
      </div> 
      <div id="lifeBar2"> 
            <div id="secondPokemonLife">Life of pokemon2: {p2Life}</div> 
      </div> 

      </div>

  );
}

export default Battle;










// var width = (currentquestion+1)/maxquestions * 100;  
// element.style.width = width + '%';