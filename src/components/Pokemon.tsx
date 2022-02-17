import React, { useEffect, useState } from 'react';
import { PokemonInt } from '../interfaces/PokemonInterface';
import { convertPoundsToKilograms, getFirstAbility } from './Pokemon.service';

async function getPokemon(id: string) {
    try {
        const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/');
        return APIResponse.json();

    } catch (error) {
        console.error(error);
    }
}

function Pokemon({id} : {id: string}) {
    const [data, setData] = useState<PokemonInt>();

    useEffect( () => {
        console.log('Pokemon ID: ' + id);
        const APIResponse = getPokemon(id);
        APIResponse?.then( response => {
            setData(response);
        })
    }, [])

    return (
        <div>
            { data?.id ? 
                <div>
                    <p> 
                        Pokemon's ID : {data.id}
                    </p>
                    <p> 
                        Pokemon's Name : {data.name}
                    </p>
                    {getFirstAbility(data)? 
                        <p> {data.name}'s first ability : {getFirstAbility(data)} </p> : 
                        <p> {data.name} has no apparent ability</p> }
                    
                    {convertPoundsToKilograms(data)? 
                        <p> {data.name}'s weight : {convertPoundsToKilograms(data)} Kg</p> : 
                        <p> {data.name} has no apparent weight</p> }
                    <img src={data.sprites.front_default} alt="Yannou" />
                </div> : <p>No pokemon found</p>}
        </div>
    );    
}

export default Pokemon;
