const ESTADO_INICIAL_1 = {
    nome: 'Rodrigo',
    sobrenome: 'Santos da Silva',
    endereco: 'Rua Soldado Mathias, 765',
    cidade: 'Belo Horizonte',
  };

  const ESTADO_INICIAL_2 = {
    nome: 'Bruna',
    sobrenome: 'Santana Oliveira',
    endereco: 'Rua Holanda, 332',
    cidade: 'São Paulo',
  };

  const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, {type, param}) => {
    switch (type) {
      case 'NAME-1':
        return {
          ...state,
          nome: param,
        }
      case 'SOBRENOME-1':
        return {
          ...state,
          sobrenome: param,
        }
      default:
        return state;
    }
  };

  const meuSegundoReducer = (state = ESTADO_INICIAL_2, {type, param}) => {
    switch (type) {
      case 'NAME-2':
        return {
          ...state,
          nome: param,
        }
      case 'SOBRENOME-2':
        return {
          ...state,
          sobrenome: param,
        }
      default:
        return state;
    }
  };
  
  const combineReducers = Redux.combineReducers({
    meuPrimeiroReducer,
    meuSegundoReducer,
  });

  
  const store = Redux.createStore(combineReducers);

  const nome_1 = document.getElementById('nome-1');
  const nome_2 = document.getElementById('nome-2');

  const sobrenome_1 = document.getElementById('sobrenome-1')
  const sobrenome_2 = document.getElementById('sobrenome-2')
  
  store.subscribe(() => {
    const { meuPrimeiroReducer, meuSegundoReducer } =  store.getState();

    nome_1.innerText = meuPrimeiroReducer.nome;
    sobrenome_1.innerText = meuPrimeiroReducer.sobrenome;

    nome_2.innerText = meuSegundoReducer.nome;
    sobrenome_2.innerText = meuSegundoReducer.sobrenome;

  });


  function createrAction ( type, param) {
    return{
      type,
      param,
    }
  }

  window.onload = () => {
    setTimeout(() => {
      //Seu dispatch vem aqui //
      store.dispatch(createrAction('NAME-1', 'Tonhao'));
      store.dispatch(createrAction('NAME-2', 'Zezão'));
      store.dispatch(createrAction('SOBRENOME-1', 'Tonin'));
      store.dispatch(createrAction('SOBRENOME-2', 'Zezin'));
      
    }, 3000);
  };

  