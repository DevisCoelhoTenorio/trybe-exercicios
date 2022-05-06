import React from "react";
import './App.css';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
        return(
            conteudos.map((elemento) => 
            <ol className="Key">
                <li>O conteúdo é: {elemento.conteudo}</li>
                <li>Status: {elemento.status}</li>
                <li>Bloco: {elemento.bloco}</li>
            </ol>
            )
        )
    }
}

export default Content;