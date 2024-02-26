const initialState = {
    userName: '',
    firstName: '',
    lastName: '',
    error: null, // Ajouté pour gérer les erreurs
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload, // Cela met à jour firstName, lastName, et userName directement à la racine de l'état
                error: null, 
            };
        case 'UPDATE_USER':
            return {
                ...state,
                ...action.payload,
            };
    case 'FETCH_USER_DATA_FAILURE':
            return {
                ...state,
                error: action.payload, // Stocker le message d'erreur dans l'état
            };
        default:
            return state;
    }
};


export default userReducer;