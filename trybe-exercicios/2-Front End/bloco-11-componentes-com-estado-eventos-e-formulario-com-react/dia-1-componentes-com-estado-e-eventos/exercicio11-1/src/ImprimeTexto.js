import React from 'react';

class ImprimeTexto extends React.Component {
    constructor() {
        super()
        this.textonatela = this.textonatela.bind(this);
        this.state = {
            contador: 0,
            color: 'white',
        }
    }
    textonatela () {
        this.setState((ant, _prop) => ({
            contador: ant.contador + 1,
            color: ant.color!=='white' ? "white" : "red",
        }))
    }
    render() {
        return (
            <button onClick={this.textonatela} 
            style={{backgroundColor: this.state.color}}>
                {this.state.contador}</button>
        )
    }
}
export default ImprimeTexto;