import pokemonApi from "@/api/pokemonApi";

const getPokemonOptions = async () => {
    // Generate a 4-array with random numbers between 1 and 650 (inclusive)
    const numbersArray = []

    while (numbersArray.length < 4) {
        // Generate random number
        const randomNumber = Math.ceil(Math.random() * 650)

        if (!numbersArray.includes(randomNumber)) {
            numbersArray.push(randomNumber)
        }
    }

    const pokemons = await getPokemonNames(numbersArray)
    
    return pokemons
}

const getPokemonNames = async ([ a, b, c, d ]) => {
    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name, resp.data.id)
    // console.log(a, b, c, d)

    const promisesArray = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]

    const [ p1, p2, p3, p4 ] = await Promise.all(promisesArray);
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ]
}

export default getPokemonOptions