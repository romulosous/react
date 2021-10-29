import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "r",
      senha: "",
      sexo: "masculino"
    }
    this.trocaEmail = this.trocaEmail.bind(this)
    this.trocaSexo = this.trocaSexo.bind(this)
  }

  trocaEmail(e) {
    let valorDigitado = e.target.value
    this.setState({ email: valorDigitado })
  }
  trocaSexo(e) {
    this.setState({ sexo: e.target.value })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" name="email" onChange={this.trocaEmail} value={this.state.email} /> <br />
        Senha:
        <input type="password" name="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /> <br />

        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>

        </select> <br />
        {this.state.sexo}
      </div>
    )
  }
}

export default App