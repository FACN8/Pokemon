
import React from "react";
import { getPokemon } from "./../utils";
import { getMove } from "./../utils";

function Battle({ pokemon1,pokemon2,move }) {
  const [pokemon1, setPokemon1] = React.useState(null);
  const [pokemon2, setPokemon2] = React.useState(null);
  const [move, setMove] = React.useState(null);

  React.useEffect(() => {
    getPokemon(name).then(data => {
      setData(data);
    });
  }, [name]);
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

export default Battle;










var width = (currentquestion+1)/maxquestions * 100;  
element.style.width = width + '%';