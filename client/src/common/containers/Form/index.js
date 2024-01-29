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
            console.log("Envoi de la requête", { email: formData.email, password: formData.password });
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email, 
                    password: formData.password
                })
            });
            console.log("Réponse reçue", response);
            const data = await response.json();
            console.log("Data:", data); // Ajouter ce log
            if (response.ok) {
                localStorage.setItem('token', data.body.token);
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: {
                        token: data.body.token
                    }
                });
                navigate('/Profil');
            } else {
                // Gérer les erreurs d'authentification
                setError(data.message || 'Échec de lauthentification');
            }
        } catch (error) {
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