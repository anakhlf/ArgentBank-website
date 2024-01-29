import React from 'react';
import "./style.css";

const Field = ({ label, type, id, name, onChange, isCheckbox }) => {
    return (
        <div className={`input-${isCheckbox ? 'remember' : 'wrapper'}`}>
            {!isCheckbox && <label htmlFor={id}>{label}</label>}
            <input type={type} id={id} name={name} onChange={onChange} /> {/* Ajout de la prop onChange ici */}
            {isCheckbox && <label htmlFor={id}>{label}</label>}
        </div>
    );
}

export default Field;