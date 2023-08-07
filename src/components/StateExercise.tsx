import { useState } from "react";

const StateExercise = () => {
  //   const [game, setGame] = useState({
  //     id: 1,
  //     player: { name: "John", age: 26 },
  //   });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepporoni",
    toppings: ["Mushroom", "Onion"],
  });

  const handleClick = () => {
    //setGame({ ...game, player: { ...game.player, name: "Joseph" } });

    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <>
      <h4>StateExercise</h4>
      {/* <h5>{game.player.name}</h5> */}
      <h5>{pizza.name}</h5>
      <ul>
        {pizza.toppings.map((top) => (
          <li>{top}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default StateExercise;
