<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este Pokémon?</h1>

        <PokemonPicture
            :pokemon-id="pokemon.id"
            :show-pokemon="showPokemon"
        />
        <PokemonOptions
            :pokemonsOptions="pokemonArr"
            @selection-pokemons="checkAnswer"
        />
    </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"

import getPokemonOptions from "@/helpers/getPokemonOptions.js"

export default {
    components: {
        PokemonPicture,
        PokemonOptions,
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const randomInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[randomInt]
        },
        checkAnswer(pokemonId) {
            this.showPokemon = true
        },
    },
    mounted() {
        this.mixPokemonArray()
    },
};
</script>
