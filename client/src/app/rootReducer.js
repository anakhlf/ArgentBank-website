import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer.js'; // Importez votre authReducer
import userReducer from './reducers/userReducer'; 


const rootReducer = combineReducers({
  auth: authReducer, // Utilisez authReducer sous la clé 'auth'
  user : userReducer,
});

export default rootReducer;