import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import atualizaListaThunk from './redux/actions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      find: 'reactjs',
    }
  }

  componentDidMount(){
    const { atualizaListaThunk } = this.props;
    atualizaListaThunk("reactjs");
  }
  
  handChanged = ({ target }) => {
    const { atualizaListaThunk } = this.props;
    atualizaListaThunk(target.value);
    this.setState({ find: target.value})
  }

  refresh = () => {
    const { find } = this.state;
    const { atualizaListaThunk } = this.props;
    atualizaListaThunk(find);
  }

  render() {
    const { list, isLoading } = this.props;
    const { find } = this.state;
    return (
      <div>
        <div>
        <h1>{`Subredditd sobre ${ find }`} </h1>
        <select onClick={ this.handChanged }>
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
        <button type="button" onClick={ this.refresh }>Atualizar</button>
        </div>
        {isLoading ? <p>Loading...</p> : (
        <ul>
        {list.map((post, index) => (
          <li key={index}>{post.data.title}</li>
        ) )}
        </ul>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = {
 atualizaListaThunk,
}
const mapStateToProps = ({list: { list, isLoading }}) => ({
 list,
 isLoading,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
