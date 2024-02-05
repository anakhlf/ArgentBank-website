import React, { useState, useEffect } from 'react';
import "./style.css";
import Field from '../../components/Field/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, setUserData } from '../../../app/actions/userAction';

const NameForm = ({ closeModal }) => {
    const user = useSelector(state => state.auth.user);
    console.log('user:',user)
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (user && user.userName) {
          setUserName(user.userName);
        }
      }, [user]);

    console.log('user2:',userName)
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }
        
        const apiUrl = 'http://localhost:3001/api/v1/user/profile';
        const payload = { userName };

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('new data:', data.body);
        
        // Dispatche l'action updateUser avec les données contenues dans le body de la réponse
        dispatch(setUserData(data.body));
        dispatch(fetchUserData()); 
        console.log('user6:',user);
        closeModal();
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };
    console.log('user3:',userName)
    return (
        <form onSubmit={handleSubmit}>
            <Field label="User name :" type="text" id="UserName" name="UserName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <Field label="First name :" type="text" id="firstname" name="firstname" value={user.firstName} disabled />
            <Field label="Last name :" type="text" id="lastname" name="lastname" value={user.lastName} disabled />
            <div className='div_buttons'>
                <button type="submit" className="sign-in-button">Save</button>
                <button type="button" className="sign-in-button" onClick={closeModal}>Cancel</button>
            </div>
        </form>
    );
};


export default NameForm;