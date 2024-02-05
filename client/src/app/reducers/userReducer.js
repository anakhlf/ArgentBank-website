const initialState = {
    userName: '',
    firstName: '',
    lastName: '',
    error: null, // Ajouté pour gérer les erreurs
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            // Assurez-vous que la structure du payload correspond à celle de votre état initial
            return {
                ...state,
                ...action.payload,
                error: null, // Réinitialiser l'erreur lors du chargement réussi
            };
        case 'UPDATE_USER':
            return {
                ...state,
                ...action.payload,
            };
        case 'FETCH_USER_DATA_FAILURE':
            // Gestion d'une action d'erreur, en supposant que vous voulez stocker le message d'erreur
            return {
                ...state,
                error: action.payload, // Stocker le message d'erreur dans l'état
            };
        default:
            return state;
    }
};


export default userReducer;