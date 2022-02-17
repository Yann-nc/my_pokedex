import Pokemon from './Pokemon'

export function getFirstAbility(pokemon: any) {

    if (!pokemon.abilities[0])
        return null;

    return pokemon.abilities[0].ability?.name;
}

export function convertPoundsToKilograms(pokemon: any) {
    if (!pokemon.weight)
        return null;

    return Math.round(pokemon.weight / 2.205);
}