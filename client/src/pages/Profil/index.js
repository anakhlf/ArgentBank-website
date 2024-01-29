import "./style.css"
import Menu from '../../common/containers/Menu/index'
import Footer from '../../common/containers/Footer/index'
import UserPage from '../../common/containers/UserPage/index';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';



function Profil () {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch({ type: 'LOGOUT' });
            localStorage.removeItem('token'); // Nettoyer le token du localStorage
            console.log("tu es bien deco");
        };
    }, [dispatch]);
    return (
        <div>
            <Menu />
            <UserPage />
            <Footer />
        </div>
    )
}

export default Profil;