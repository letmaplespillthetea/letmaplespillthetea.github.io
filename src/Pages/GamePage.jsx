import React from "react";
import "./GamePage.css";

const games = [
  { id: 1, name: "Night In The Woods", image: "/games/NightInTheWoods.jpg" },
  { id: 2, name: "Dreamy Room", image: "/games/DreamyRoom.jpg" },
  { id: 3, name: "Phoenix Wright: Ace Attorney Trilogy", image: "/games/PhoenixWright.jpg" },
  { id: 4, name: "Last Day Of June", image: "/games/LastDayOfJune.jpg" },
];

const GamePage = () => {
  return (
    <div className="game-page">
      <h1 className="page-title">Games I play (and plan to review soon)</h1>
      <div className="game-intro-row">
        <img
          src="/gif/game.gif"
          className="game-gif"
          alt="Game animation"
        />
        <div className="game-intro-text">
          <h2>Why I love games 🎮</h2>
          <p>
            Gaming helps me relax, discover new worlds, and test my strategy skills.
            From fast-paced shooters to immersive RPGs, I enjoy diving deep into game
            design and storytelling.
          </p>
        </div>
      </div>
      <div className="game-grid">
        {games.map((game, index) => {
          console.log("Rendering game:", game.id, game.id === 1);
          return (
            <div key={game.id} className="game-card">
              {game.id % 2 === 1 && (
                <div className="game-name top">{game.name}</div>
              )}
              <img src={game.image} alt={game.name} className="game-image" />
              {game.id % 2 === 0 && (
                <div className="game-name bottom">{game.name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamePage;
