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

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>
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
            showAnswer: false,
            message: '',
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const randomInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[randomInt]
        },
        checkAnswer(selectedPokemonId) {
            this.showPokemon = true
            this.showAnswer = true

            if (selectedPokemonId === this.pokemon.id) {
                this.message = `Correcto, ${this.pokemon.name}`
            } else {
                this.message = `Oops... era ${this.pokemon.name}`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    },
};
</script>
