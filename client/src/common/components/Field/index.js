import React from 'react';
import "./style.css";

const Field = ({ label, type, id, name, value, checked, disabled, onChange, isCheckbox }) => {
    const divId = isCheckbox ? `div-${id}` : undefined;
    return (
        <div id={divId} className={`input-${isCheckbox ? 'remember' : 'wrapper'}`}>
            {!isCheckbox && <label htmlFor={id}>{label}</label>}
            {isCheckbox ? (
                <input 
                    type={type} 
                    id={id} 
                    name={name} 
                    checked={checked} // Utilisez `checked` pour les checkbox
                    onChange={onChange} 
                    disabled={disabled} 
                />
            ) : (
                <input 
                    type={type} 
                    id={id} 
                    name={name} 
                    value={value} // Utilisez `value` pour les champs autres que checkbox
                    onChange={onChange} 
                    disabled={disabled} 
                />
            )}
            {isCheckbox && <label htmlFor={id}>{label}</label>}
        </div>
    );
};

export default Field;