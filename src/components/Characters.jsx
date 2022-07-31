import React, { useState, useEffect } from 'react';
import '../styles/Characters.css';
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="CharacterList">
      {characters.map(character => (
        <div className="CharacterItem" key={character.id}>
          <img src={character.image} alt={character.name} key={character.id} />
          <div className="CharacterInfo">
            <h2>{character.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;