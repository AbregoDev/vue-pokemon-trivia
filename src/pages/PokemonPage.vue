<template>
    <h1>¿Quién es este Pokémon?</h1>

    <!-- TODO: img -->
    <PokemonPicture />

    <!-- TODO: Opciones -->
    <PokemonOptions />
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';

export default {
    components: {
        PokemonPicture,
        PokemonOptions,
    }
}
</script>
