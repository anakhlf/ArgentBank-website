import React from 'react';
import "./style.css";

const Field = ({ label, type, id, name, value, checked, disabled, onChange, isCheckbox, error }) => {
    const divId = isCheckbox ? `div-${id}` : undefined;
    const inputClass = error ? 'error-border' : '';
    console.log("Error:", error);
    return (
        <div id={divId} className={`input-${isCheckbox ? 'remember' : 'wrapper'}`}>
            {!isCheckbox && <label htmlFor={id}>{label}</label>}
            {isCheckbox ? (
                <input 
                    className={inputClass} // Appliquez la classe conditionnelle
                    type={type} 
                    id={id} 
                    name={name} 
                    checked={checked}
                    onChange={onChange} 
                    disabled={disabled} 
                />
            ) : (
                <input 
                    className={inputClass}
                    type={type} 
                    id={id} 
                    name={name} 
                    value={value}
                    onChange={onChange} 
                    disabled={disabled} 
                />
            )}
            {isCheckbox && <label htmlFor={id}>{label}</label>}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Field;