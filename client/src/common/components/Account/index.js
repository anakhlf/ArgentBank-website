import React from 'react';
import "./style.css"

import Button from '../Button'

const Account = ({ accounts }) => {
    return (
        <div>
        {accounts.map(account => (
            <section key={account.id} className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account.title}</h3>
                <p className="account-amount">{account.amount}</p>
                <p className="account-amount-description">{account.description}</p>
            </div>
            <Button />
            </section>
        ))}
        </div>
    )
}

export default Account;

//A rediviser en 3 props