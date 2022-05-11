import React from "react";
import "./App.css";
import ImprimeTexto from "./ImprimeTexto"


class App extends React.Component {
  render() {
    return <div className="App">
      <ImprimeTexto param='oi'/>
      <ImprimeTexto param='tudo'/>
      <ImprimeTexto param='bem?'/>
    </div>;
  }
}

export default App;
