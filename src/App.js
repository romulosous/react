import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre username={this.props.nome} cargo={this.props.cargo} anos={this.props.idade} />
        <Social fb={this.props.facebook} />
        <hr />
      </div>
    )
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.username}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.anos} anos</h3>
      </div>
    )
  }
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Romulo" cargo="Programador" idade="21" facebook="https://google.com.br" />
      <Equipe nome="Rafanone" cargo="Dev Back-end" idade="22" facebook="https://facebook.com" />

    </div>
  )
}

export default App

