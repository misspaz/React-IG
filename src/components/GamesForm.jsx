import { useState } from "react";
import "./GamesForm.css";

export default function GamesForm({ onSubmit }) {
  const [text, setText] = useState({ title: "", image: "" });

  return (
    <div className="div-form">
      <h2>Añadir título de videojuego</h2>
      <input
        onChange={(ev) => setText({ ...text, title: ev.target.value })}
        type="text"
      />
      <h2>Añadir imagen de videojuego</h2>
      <input
        onChange={(ev) => setText({ ...text, image: ev.target.value })}
        type="text"
      />
      <button onClick={() => onSubmit(text)}>Añadir juego</button>
    </div>
  );
}
