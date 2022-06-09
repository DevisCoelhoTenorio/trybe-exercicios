const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
    indexName: 1,
    maxLength: 5,
}
  function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}



  const reducer = (state = INITIAL_STATE, action) => {
      if(action.type === 'NEXT'){
          return {
              ...state,
              index: state.index < state.maxLength ? state.index + 1 : 0,
              indexName: state.indexName < state.maxLength ? state.indexindexName +1 : 0,
          }
      }
      if(action.type === 'PREV'){
        return {
            ...state,
            index: state.index > 1 ? state.index - 1 : 5,
            indexName: state.indexName > 5 ? state.indexName - 1 : 0,
        }
    }
    if(action.type === 'RANDOM'){
        const newColor = criarCor();
        const colors = [...state.colors, newColor];
        return {
            ...state,
            colors,
            index: colors.length - 1,
            indexName: colors.length - 2,
            maxLength: colors.length - 1,
        }

    }
    return state;
  };
  const store = Redux.createStore(reducer);

  const divContainer = document.getElementById('container');
  const nomeColor = document.getElementById('value');

  store.subscribe(() => {
      const { index, colors, indexName } = store.getState();

      divContainer.style.backgroundColor = colors[index];
      nomeColor.innerText = colors[index];
      nomeColor.style.color = colors[indexName];
  });

  const btnPrev = document.getElementById('previous');
  const btnNext = document.getElementById('next');
  const btnRandom = document.getElementById('random');


  btnPrev.addEventListener('click', () =>{
      store.dispatch({type: 'NEXT'})
  });
  btnNext.addEventListener('click', () =>{
    store.dispatch({type: 'PREV'})
});
btnRandom.addEventListener('click', () =>{
    store.dispatch({type: 'RANDOM'})
});



