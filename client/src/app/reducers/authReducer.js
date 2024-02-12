const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
  isLoading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOADING':
      return {
        ...state,
        isLoading: true,
      };
      case 'LOGIN_SUCCESS':
          return {
              ...state,
              isLoggedIn: true,
              token: action.payload.token,
              user: action.payload.user,
              error: null,
              isLoading: false,
          };
      case 'LOGIN_FAILURE':
          return {
              ...state,
              error: action.payload,
              isLoggedIn: false,
              isLoading: false,
          };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          token: null,
          isLoading: false, // Arrête le chargement en cas d'échec ou de déconnexion
        };
          
      case 'SET_USER_DATA':
        const { firstName, lastName, userName } = action.payload;
        return {
            ...state,
            user: { firstName, lastName, userName }, // Met à jour seulement les champs spécifiques
            isLoading: false,
          };
      default:
        return state;
        
  }
};

export default authReducer;