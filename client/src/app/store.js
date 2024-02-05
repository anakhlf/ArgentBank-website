import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'; 
import userReducer from './reducers/userReducer'; 

// Combine les reducers
const rootReducer = combineReducers({
  // Ajoutez d'autres reducers si nécessaire
  auth: authReducer,
  user : userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});