// src/reducers.js
import { combineReducers } from 'redux';
import charactersReducer from './characterReducer'
import characterDetailReducer from './characterDetailReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  character:characterDetailReducer
});

export default rootReducer;
