
import React from "react";
import { getPokemon } from "../utils/getPokemon";
import { getMove } from "../utils/getMove";

function Battle({ pokemon1,pokemon2,move }) {
  var p1=100,p2=100;
  var turn = true;
  React.useEffect(() => {
    if(move==null) return;
    if(turn){
        p2-=move.power;
    }
    else{
        p1-=move.power;
    }
    turn = !turn;
    return;
  }, [move]);
 
  return (
    <div>
    <div id="lifeBar1"> 
            <div id="firstPokemonLife">Life of pokemon1: {p1}</div> 
      </div> 
      <div id="lifeBar2"> 
            <div id="secondPokemonLife">Life of pokemon2: {p2}</div> 
      </div> 

      </div>

  );
}

export default Battle;










// var width = (currentquestion+1)/maxquestions * 100;  
// element.style.width = width + '%';