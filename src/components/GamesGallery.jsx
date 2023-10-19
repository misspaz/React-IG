import { useState } from "react";
import GamesCard from "./GamesCard";
import GamesForm from "./GamesForm";
import "./GameGallery.css";

export default function GamesGallery() {
  const allVideogames = [
    {
      title: "Lords of the Fallen",
      image:
        "https://gaming-cdn.com/images/products/12715/380x218/lords-of-the-fallen-pc-juego-steam-europe-cover.jpg?v=1697630400",
    },
    {
      title: "Assassin's Creed: Mirage",
      image:
        "https://gaming-cdn.com/images/products/9187/380x218/assassin-s-creed-mirage-pc-juego-ubisoft-connect-europe-cover.jpg?v=1697630400",
    },
    {
      title: "HumanitZ",
      image:
        "https://gaming-cdn.com/images/products/15035/380x218/humanitz-pc-juego-steam-cover.jpg?v=1697630400",
    },
    {
      title: "Horse Ranch",
      image:
        "https://gaming-cdn.com/images/products/14273/380x218/los-sims-4-rancho-de-caballos-pc-mac-juego-ea-app-cover.jpg?v=1697630400",
    },

    {
      title: "Sonic Superstars",
      image:
        "https://gaming-cdn.com/images/products/14325/380x218/sonic-superstars-pc-juego-steam-cover.jpg?v=1697630400",
    },
    {
      title: "Lies of P",
      image:
        "https://gaming-cdn.com/images/products/14681/380x218/lies-of-p-deluxe-edition-deluxe-edition-pc-juego-steam-cover.jpg?v=1697630400",
    },
  ];

  const [videogames, setVideogames] = useState(allVideogames);
  const [textsearch, setTextsearch] = useState("");
  const [result, setResult] = useState([]);

  const addNewGame = (newGame) => {
    // console.log(newGame);
    const copyGames = [...videogames];
    copyGames.push(newGame);
    setVideogames(copyGames);
  };

  const deleteGames = (index) => {
    const copyGames = [...videogames];
    copyGames.splice(index, 1);
    setVideogames(copyGames);
  };

  const handleInputChange = (ev) => {
    const searchValue = ev.target.value;
    setTextsearch(searchValue);
    searchVideogames(searchValue);
  };

  const searchVideogames = (searchValue) => {
    const filteredGames = allVideogames.filter((game) =>
      game.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setResult(filteredGames);
  };

  return (
  <>
    <div className="div-father">
      <GamesForm onSubmit={addNewGame} />
      {videogames.map((item, index) => (
        <div key={index}>
          <GamesCard title={item.title} image={item.image} />
          <button onClick={() => deleteGames(index)}>X</button>
        </div>
      ))}
</div>
      <div>
      {result.map((item, index) => (
        <div key={index}>
          <GamesCard title={item.title} />
          </div>
      ))}
            <input onChange={handleInputChange} type="text" />
            </div>
      </>   
)};
    
