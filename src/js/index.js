const list_selection_pokemon = document.querySelectorAll('.pokemon')
const pokemon_card = document.querySelectorAll('.card-pokemon')


list_selection_pokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const card_pokemon_opem = document.querySelector('.opem')
        card_pokemon_opem.classList.remove('opem')
        
        const id_pokemon_selection = pokemon.attributes.id.value
        const id_card_pokemon_to_opem = 'card-' + id_pokemon_selection
        const card_pokemon_to_opem = document.getElementById(id_card_pokemon_to_opem)
        card_pokemon_to_opem.classList.add('opem')

        const pokemon_active_on_list = document.querySelector('.ativo')
        pokemon_active_on_list.classList.remove('ativo')
        const pokemon_select_on_list = document.getElementById(id_pokemon_selection)
        pokemon_select_on_list.classList.add('ativo')
    })
})