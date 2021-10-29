import React from "react";

const Equipe = (props) => {
  return (
    <div>
      <Sobre username={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} />
      <hr></hr>
    </div>
  )
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.username}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <a href>LinkedIn</a>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Romulo" cargo="Programador" idade="21" facebook="https://google.com.br" />
      <Equipe nome="Rafanone" cargo="Dev Back-end" idade="20" facebook="https://facebook.com" />

    </div>
  )
}

export default App

