import "./style.css";
import UserPage from '../../common/containers/UserPage/index';
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

function Profil() {
    //const dispatch = useDispatch();

    useEffect(() => {
        // Cette fonction est appelée quand l'utilisateur tente de quitter la page
        const handleBeforeUnload = (event) => {
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
            <UserPage />
        </div>
    )
}

export default Profil;