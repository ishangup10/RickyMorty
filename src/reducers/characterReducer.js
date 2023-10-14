import {initialState} from './initialState'


const charactersReducer = (state = initialState.characters, action) => {
    switch (action.type) {
      case 'FETCH_CHARACTERS':
        return { ...state, characters: action.payload}
      default:
        return state;
    }
};

export default charactersReducer