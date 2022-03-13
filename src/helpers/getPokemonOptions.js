const getPokemons = () => {
    const pokemons = Array.from(Array(650));

    return pokemons.map((_, index) => index + 1);
}

const getPokemonOptions = () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

    getPokemonNames(mixedPokemons.splice(0, 4));
}

const getPokemonNames = ([ a, b, c, d ]) => {
    console.log(a, b, c, d);
}

export default getPokemonOptions;