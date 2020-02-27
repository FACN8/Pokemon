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

  if (p1Life <= 0 || p2Life <= 0) {
    alert('Game Over');
    return <h1>Thank you !!!</h1>;
  }

  return (
    <div className="stats">
      <div className="lifeBar" id="lifeBar1">
        <img alt="heart" className="lifeHeart" src="./life.png"></img>
        <h3 id="firstPokemonLife">Pokemon - 1: {p1Life}%</h3>
      </div>
      <div className="lifeBar" id="lifeBar2">
        <h3 id="secondPokemonLife">Pokemon - 2: {p2Life}%</h3>
        <img alt="heart" className="lifeHeart" src="./life.png"></img>
      </div>
    </div>
  );
}

export default Battle;

// var width = (currentquestion+1)/maxquestions * 100;
// element.style.width = width + '%';
