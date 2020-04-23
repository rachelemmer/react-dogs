import React, { Component } from 'react'
import DogList from './DogList'

export default class App extends Component {

  state = {
    dogs: [
      {name: 'Ollie', breed: 'Golden Retriever', age: 1},
      {name: 'Japhy', breed: 'biboodle', age: 1},
      {name: 'Sam', breed: 'German Shephard', age: 5},
    ]
  }

  render() {
    return (
      <div>
        <DogList dogs={this.state.dogs} />
      </div>
    )
  }
}
