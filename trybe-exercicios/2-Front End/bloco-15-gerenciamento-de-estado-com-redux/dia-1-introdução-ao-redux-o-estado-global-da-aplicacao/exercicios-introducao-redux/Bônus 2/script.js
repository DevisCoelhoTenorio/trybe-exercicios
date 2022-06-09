console.log(document.getElementById('inc'));

// ====== Definir Reducer e Estado Inicial ==========
const initialState = {
  count: 0,
  value: 1,
};
const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + state.value,
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count - state.value,
    };
  }
  if (action.type === 'SETVALUE') {
      return {
          ...state,
        value: action.param,
      }
  }
  return state;
};

// ====== Criar a Store ==========
const store = Redux.createStore(reducer);

// ====== Lendo e reagindo a mudanças do Estado Global ==========
// Descomente abaixo:

store.subscribe(() => {
  // Leia a variável do estado global
  const { count } = store.getState();

  // atualizar
  const h1Element = document.getElementById('counter');
  h1Element.innerText = count;
});

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById('inc');
const decrementButton = document.getElementById('dec');
const inputAdd = document.getElementById('addinput');

inputAdd.addEventListener('input', (event) =>{
    const { target } = event;
    console.log(target.value);
    store.dispatch({ type: 'SETVALUE', param: parseInt(target.value) })
});

incrementButton.addEventListener('click', () => {
  // dispare sua action aqui.
  store.dispatch({ type: 'INCREMENT' });
});
decrementButton.addEventListener('click', () => {
  // dispare sua action aqui.
  store.dispatch({ type: 'DECREMENT' });
});
