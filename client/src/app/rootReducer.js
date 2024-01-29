import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer.js'; // Importez votre authReducer

const rootReducer = combineReducers({
  auth: authReducer, // Utilisez authReducer sous la clé 'auth'
  // autres reducers...
});

export default rootReducer;