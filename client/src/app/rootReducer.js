import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer.js'; 
import userReducer from './reducers/userReducer'; 


const rootReducer = combineReducers({
  auth: authReducer, 
  user : userReducer,
});

export default rootReducer;