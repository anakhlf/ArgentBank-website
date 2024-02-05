const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
          return {
              ...state,
              isLoggedIn: true,
              token: action.payload.token,
              user: action.payload.user,
              error: null,
          };
      case 'LOGIN_FAILURE':
          return {
              ...state,
              error: action.payload,
          };
      case 'LOGOUT':
          return initialState;
        case 'SET_USER_DATA':
          const { userName } = action.payload;
          return {
              ...state,
              user: { userName }, // Met à jour seulement les champs spécifiques
          };
      default:
          return state;
  }
};

export default authReducer;