import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props)
    const pokemonCard = this.props.pokemon.map(pokemon => {
      return <PokemonCard pokemonObj={pokemon} key={pokemon.id}/>
    })
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonCard}
      </Card.Group>
    )
  }
}

export default PokemonCollection
