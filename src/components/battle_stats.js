import React from 'react';

function Battle({ p1Life, setP1Life, p2Life, setP2Life, move, turn, setTurn }) {
  React.useEffect(() => {
    if (move === null) return;

    if (turn === 1) {
      setTurn(2);
      setP2Life(p2Life - (move.power/2));
    } else {
      setTurn(1);
      setP1Life(p1Life - (move.power/2));
    }

    return;
  }, [move]);
  React.useEffect(()=>{
    var width1 = (p1Life)/100 * 100;
    width1 = p1Life < 0 ? 0 : width1
    document.getElementById("firstPokemonLife").style.width = width1 + '%'
    var width2 = (p2Life)/100 * 100;
    width2 = p2Life < 0 ? 0 : width2
    document.getElementById("secondPokemonLife").style.width = width2 + '%'
  },[p1Life, p2Life])

  return (
    <div className="stats">
    <img className="lifeHeart" src="./life.png"></img>
      <div className="lifeBar" id="lifeBar1">
        <div id="firstPokemonLife">{p1Life}%</div>
      </div>
      	&nbsp;	&nbsp;	&nbsp;
      <div className="lifeBar" id="lifeBar2">

        <div id="secondPokemonLife">{p2Life}%</div>
      </div>
      <img className="lifeHeart" src="./life.png"></img>

    </div>
  );
}

export default Battle;


