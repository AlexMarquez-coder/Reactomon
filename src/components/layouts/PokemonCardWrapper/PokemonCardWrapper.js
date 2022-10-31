import PokemonCard from "../../PokemonCard/PokemonCard";
import "./PokemonCardWrapper.css"
function PokemonCardWrapper(props) {
    return (
        <section className="pokemonCardWrapper">
            <PokemonCard
                pokemonName="Dialga"
                pokemonType={["Steel", "Dragon"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png"
                pokemonHP="120"
                updateCounter={props.updateCounter}
            />

            <PokemonCard
                pokemonName="Palkia"
                pokemonType={["Water", "Dragon"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
                pokemonHP="110"
                updateCounter={props.updateCounter}
            />

            <PokemonCard
                pokemonName="Heatran"
                pokemonType={["Fire", "Steel"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png"
                pokemonHP="100"
                updateCounter={props.updateCounter}
            />

            <PokemonCard
                pokemonName="Regigigas"
                pokemonType={["Normal"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png"
                pokemonHP="90"
                updateCounter={props.updateCounter}
            />

        </section>
    )
}

export default PokemonCardWrapper;