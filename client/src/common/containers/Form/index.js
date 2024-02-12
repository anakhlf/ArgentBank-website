import React, {  useState, useEffect } from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Field from '../../components/Field/index'
import { loginUser } from '../../../app/actions/authAction'; // Ajustez le chemin selon votre structure de fichiers


function Form () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ 
        email: localStorage.getItem('email') || '', 
        password: localStorage.getItem('password') || '', 
        rememberMe: localStorage.getItem('rememberMe') === 'true' 
    });
    const [error, setError] = useState('');

    // Fonction pour initialiser le formulaire avec les données de localStorage
    useEffect(() => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const rememberMe = localStorage.getItem('rememberMe') === 'true';

        if (email && password && rememberMe) {
            setFormData({ email, password, rememberMe });
        }
    }, []);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email: formData.email, password: formData.password }, navigate, setError));
      };

    return (
        <form onSubmit={handleSubmit}>
            <Field
                label="Email"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <Field
                label="Password"
                type="password"
                id="password"
                name="password"
                value={formData.password} 
                onChange={handleChange}
            />
            <Field
                label="Remember me"
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                isCheckbox={true}
            />
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default Form;