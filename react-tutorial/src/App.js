import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  removeCharacter = (index) => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
}


export default App