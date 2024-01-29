const initialState = {
    isLoggedIn: false,
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
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;