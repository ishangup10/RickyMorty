import {initialState} from './initialState'


const characterDetailReducer = (state = initialState.character, action) => {
  console.log(action.type);
    switch (action.type) {
      case 'GET_CHARACTER':
        return { ...state, character: action.payload}
      default:
        return state;
    }
};

export default characterDetailReducer