export const loginSuccess = (data) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: data,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
  };

  export const loginUser = (credentials) => async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      }); 
  
      if (response.ok) {
        const data = await response.json();
        dispatch(loginSuccess(data));
        localStorage.setItem('token', data.token);
        // Redirection ou autre logique de post-connexion
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };