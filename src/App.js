import React, { Component } from "react";


class App extends Component {
  // Primeiro que é carregado
  constructor(props) {
    super(props)
    this.state = {
      hora: "00:00:00"
    }
  }

  // Depois que o componente é montado
  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, 1000)
  }

  // Toda vez que um componente é atualizado, fazer algo..
  componentDidUpdate() {
    console.log("Atualizou!!!")
  }


  render() {
    return (
      <div>
        <h1>Meu Projeto {this.state.hora}</h1>
      </div>
    )
  }
}

export default App