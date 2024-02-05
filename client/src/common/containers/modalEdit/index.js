import React from 'react';
import "./style.css"
import NameForm from '../NameForm'

const ModalEdit = ({ user, closeModal }) => {
    return (
        <section className="modal">
            <h1>Edit user info</h1>
            <NameForm user={user} closeModal={closeModal} />
        </section>
    )
}

export default ModalEdit;