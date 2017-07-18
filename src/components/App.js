import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = typeOfPet => this.setState({filters: {type: typeOfPet}})

  onAdoptPet = petId => this.setState({adoptedPets: [...this.state.adoptedPets, petId]})

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then(data => {
        this.setState({pets: data})
      })
    } else {
      fetch( `/api/pets?type=${this.state.filters.type}`).then(data => {
        this.setState({pets: data})
      })
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
