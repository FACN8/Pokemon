import React from 'react';

function Battle({ p1Life, setP1Life, p2Life, setP2Life, move, turn, setTurn }) {
  React.useEffect(() => {
    if (move === null) return;

    if (turn === 1) {
      setTurn(2);
      setP2Life(p2Life - move.power);
    } else {
      setTurn(1);
      setP1Life(p1Life - move.power);
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

        <img alt="heart" className="lifeHeart" src="./life.png"></img>
        <h3 id="firstPokemonLife">Pokemon - 1: {p1Life}%</h3>
      </div>
      	&nbsp;	&nbsp;	&nbsp;
      <div className="lifeBar" id="lifeBar2">

        <h3 id="secondPokemonLife">Pokemon - 2: {p2Life}%</h3>
        <img alt="heart" className="lifeHeart" src="./life.png"></img>
      </div>
      <img className="lifeHeart" src="./life.png"></img>

    </div>
  );
}

export default Battle;

// var width = (currentquestion+1)/maxquestions * 100;
// element.style.width = width + '%';
