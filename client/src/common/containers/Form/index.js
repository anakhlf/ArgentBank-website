import React, { useState } from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Field from '../../components/Field/index'

function Form () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Réinitialiser les erreurs précédentes

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email, 
                    password: formData.password
                })
            });
            const data = await response.json();
        if (response.ok) {
            
            localStorage.setItem('token', data.body.token);

            // Faire une autre requête pour obtenir les informations de l'utilisateur
            const userInfoResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${data.body.token}`
            },
            cache: 'no-cache' // Ajout de cette option pour éviter l'utilisation du cache
            });
            
            const userInfoData = await userInfoResponse.json();
            // Vérifier si la requête a réussi avant de dispatcher
            if (userInfoResponse.ok) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        user: userInfoData.body, // Utiliser les données contenues dans 'body'
                        token: data.body.token
                    }
                });
                console.log("hello there!")
                navigate('/Profil');
            } else {
                // Gérer les erreurs pour la requête d'informations de l'utilisateur
                setError(userInfoData.message || 'Erreur lors de la récupération des informations utilisateur');
            }
        } else {
            // Gérer les erreurs d'authentification
            setError(data.message || 'Échec de lauthentification');
        }
    } catch (error) {
        console.error('Erreur lors du processus de connexion', error);
        setError('Erreur de connexion au serveur');
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <Field label="Email" type="text" id="email" name="email" onChange={handleChange} />
            <Field label="Password" type="password" id="password" name="password" onChange={handleChange} />
            <Field label="Remember me" type="checkbox" id="remember-me" name="rememberMe" isCheckbox onChange={handleChange} />
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default Form;