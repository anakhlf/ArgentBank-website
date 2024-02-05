import React, { useState } from 'react';
import "./style.css"
import { useSelector } from 'react-redux';
import Account from '../../components/Account'
import ModalEdit from '../modalEdit';

const accounts = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance"
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance"
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance"
    }
  ];

function UserPage() {
    // Récupérer les informations de l'utilisateur depuis l'état Redux
    const user = useSelector(state => state.auth.user);
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);

    if (!user) {
      // Gérer le cas où 'user' est null (par exemple, afficher un message ou rediriger)
      return <div>Loading user data...</div>; // ou toute autre logique appropriée
  }

    return (
      <main className="main bg-dark">
          <div className="header">
              {/* Utiliser les informations de l'utilisateur pour le message de bienvenue */}
              <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
              <button className="edit-button" onClick={toggleModal}>Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <Account accounts={accounts}/>
          {isModalOpen && <ModalEdit user={user} closeModal={toggleModal} />}
      </main>
    )
}

export default UserPage;