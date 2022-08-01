import React, {useState, useEffect, useReducer} from 'react';
import '../styles/Characters.css';

const initialState = {
    favorites: []
}
const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FROM_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(character => character.id !== action.payload)
            }
        default:
            return state;
    }
}
const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);

    const handleClick = (character) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: character});
    }
    const removeFromFavorite = (character) => {
        dispatch({type: 'REMOVE_FROM_FAVORITE', payload: character.id});
    }

    return (
        <>
            {favorites.favorites.length > 0 && <>
                <h1>Favorites</h1>
                <div className="CharacterList">
                    {favorites.favorites.map(character => (
                        <div className="FavoriteItem" key={character.id}>
                            <img src={character.image} alt={character.name} key={character.id}/>
                            <div className="CharacterInfo">
                                <h2>{character.name}</h2>
                                <button onClick={() => removeFromFavorite(character)}>Remove from favorite</button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
            }

            <h1>Characters</h1>
            <div className="CharacterList">
                {characters.map(character => (
                    <div className="CharacterItem" key={character.id}>
                        <img src={character.image} alt={character.name} key={character.id}/>
                        <div className="CharacterInfo">
                            <h2>{character.name}</h2>
                            <button onClick={() => handleClick(character)}>Add to favorite</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Characters;