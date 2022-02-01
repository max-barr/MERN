import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
    const [creatures, setCreatures] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => setCreatures(response.results))
    }, []);
    
    return (
        <div>
            {creatures.length > 0 && creatures.map((creature, index) => {
                return <div key={index}>{creature.name}</div>
            })}
        </div>
    );
}

export default Pokemon;