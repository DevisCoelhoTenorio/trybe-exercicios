const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
  };

  const reducer = (state = INITIAL_STATE, action) => {
      if(action.type === 'NEXT'){
          return {
              ...state,
              index: state.index < 5 ? state.index + 1 : 0,
          }
      }
      if(action.type === 'PREV'){
        return {
            ...state,
            index: state.index > 1 ? state.index - 1 : 5,
        }
    }
    return state;
  };
  const store = Redux.createStore(reducer);

  const divContainer =document.getElementById('container');

  store.subscribe(() => {
      const { index, colors } = store.getState();

      divContainer.style.backgroundColor = colors[index];
  });

  const btnPrev = document.getElementById('previous');
  const btnNext = document.getElementById('next');

  btnPrev.addEventListener('click', () =>{
      store.dispatch({type: 'NEXT'})
  });
  btnNext.addEventListener('click', () =>{
    store.dispatch({type: 'PREV'})
});



