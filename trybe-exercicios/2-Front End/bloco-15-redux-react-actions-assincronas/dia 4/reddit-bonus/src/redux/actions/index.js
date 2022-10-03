export const UPDATE_LIST = 'UPDATE_LIST';
export const LOAD_PAGE = 'LOAD_PAGE';
export const ERROR_REQUEST = 'ERROR_REQUEST';

const atualizaLista = (lista) => ({ type: UPDATE_LIST, payload: lista })

const isLoading = () => ({type: LOAD_PAGE })

const erroRequest = (error) => ({type: ERROR_REQUEST, payload: error})

const atualizaListaThunk= (busca) => async (dispatch) => {

    dispatch(isLoading())

    try{
        const response = await fetch(`https://www.reddit.com/r/${busca}.json`);
        const responseJson = await response.json();
        console.log(responseJson.data.children);
        dispatch(atualizaLista(responseJson.data.children))
    }catch(e){
        dispatch(erroRequest(e))
    }
}
export default atualizaListaThunk