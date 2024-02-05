import React from 'react';
import "./style.css";

const Field = ({ label, type, id, name, value, disabled, onChange, isCheckbox }) => {
    return (
        <div className={`input-${isCheckbox ? 'remember' : 'wrapper'}`}>
            {!isCheckbox && <label htmlFor={id}>{label}</label>}
            <input 
              type={type} 
              id={id} 
              name={name} 
              onChange={onChange} 
              value={isCheckbox ? undefined : value} 
              defaultValue={isCheckbox ? value : undefined}
              disabled={disabled}
            /> 
            {isCheckbox && <label htmlFor={id}>{label}</label>}
        </div>
    );
};

export default Field;