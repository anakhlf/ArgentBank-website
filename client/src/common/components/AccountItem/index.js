import React from 'react';
import "./style.css";
import Button from '../Button';

function AccountItem({ title, amount, description }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <Button />
        </section>
    );
}

export default AccountItem;