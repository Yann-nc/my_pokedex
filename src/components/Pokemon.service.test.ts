import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ],
    weight: 50
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return null if there is no weight information', () => {
        expect(convertPoundsToKilograms(emptyPokemon)).toEqual(null);
    })
    it('Should return the weight converted from pounds to kilograms', () => {
        expect(convertPoundsToKilograms(pokemon)).toEqual(23);
    })
});
