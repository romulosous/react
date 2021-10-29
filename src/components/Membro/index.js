import React, { Component } from "react";

class Membro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome
    }
    this.entrar = this.entrar.bind(this)
  }
  entrar(name) {
    this.setState({ nome: name })
  }
  render() {
    return (
      <div>
        <h1>Bem-vindo(a) {this.state.nome}</h1>
        <button onClick={() => this.entrar("Romim")} >Entrar no sistema</button>
        <button onClick={() => this.setState({ nome: "" })}>Sair</button>
      </div>
    )
  }
}

export default Membro