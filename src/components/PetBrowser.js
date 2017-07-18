import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(currentPet => {
      return (
        <Pet
          pet={currentPet}
          onAdoptPet={this.props.onAdoptPet}
          isAdopted={this.props.adoptedPets.includes(currentPet.id)}
        />
      )
    })
    return (
      <div className="ui cards">
        {petCards}
      </div>
    )
  }
}

export default PetBrowser;
