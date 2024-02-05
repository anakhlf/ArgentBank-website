export const updateUser = (userData) => {
    return {
        type: 'UPDATE_USER',
        payload: userData,
    };
};

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
    try {
      let response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
      }); 
  
      if (response.ok) {
        const userData = await response.json();
        dispatch(setUserData(userData));
      } else {
        dispatch(fetchUserDataError("Failed to fetch user data"));
      }
    } catch (error) {
      dispatch(fetchUserDataError(error.message));
    }
  };