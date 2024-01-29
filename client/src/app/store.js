import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'; // Remplacez par le chemin réel vers votre authReducer

// Combine les reducers
const rootReducer = combineReducers({
  // Ajoutez d'autres reducers si nécessaire
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});