export const loginSuccess = (user, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user, token },
});
  
  export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
  };

  export const loginUser = (credentials, navigate) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.body.token);
        const userInfoResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${data.body.token}`,
          },
        });
  
        if (userInfoResponse.ok) {
          const userInfoData = await userInfoResponse.json();
          // Créez un nouvel objet avec seulement les données nécessaires
          const userData = {
            firstName: userInfoData.body.firstName,
            lastName: userInfoData.body.lastName,
            userName: userInfoData.body.userName,
          };
          // Dispatchez l'action loginSuccess avec ce nouvel objet et le token
          dispatch(loginSuccess(userData, data.body.token));
          navigate('/Profil'); // Naviguer vers le profil après la connexion réussie
        } else {
          dispatch(loginFailure("Failed to fetch user data"));
        }
      } else {
        dispatch(loginFailure(data.message || 'Authentication failed'));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
