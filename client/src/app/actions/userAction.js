import { loginFailure, loginSuccess } from './authAction';


//met à jour le username
export const setUserData = (userData) => {
    return {
      type: 'SET_USER_DATA',
      payload: userData,
    };
  };
  
  export const fetchUserDataError = (error) => {
    return {
      type: 'FETCH_USER_DATA_FAILURE',
      payload: error,
    };
  };
  
  export const fetchUserData = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Si aucun token n'est trouvé, dispatche une erreur ou gère l'absence du token
      dispatch(loginFailure("No token found"));
      return;
    }
    try {
      let userInfoResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` },
      }); 
  
      if (userInfoResponse.ok) {
        const userInfoData = await userInfoResponse.json();
        // Créez un nouvel objet avec seulement les données nécessaires
        const userData = {
          firstName: userInfoData.body.firstName,
          lastName: userInfoData.body.lastName,
          userName: userInfoData.body.userName,
        };
        // Dispatchez l'action setUserData avec ce nouvel objet
        dispatch(loginSuccess(userData, token));
      } else {
        dispatch(fetchUserDataError("Failed to fetch user data"));
      }
    } catch (error) {
      dispatch(fetchUserDataError(error.message));
    }
  };