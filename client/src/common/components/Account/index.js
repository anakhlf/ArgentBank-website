import React from 'react';
import "./style.css"
import AccountItem from '../AccountItem';

const Account = ({ accounts }) => {
    return (
        <div>
            {accounts.map(account => (
                <AccountItem
                    key={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </div>
    )
}

export default Account;

//A rediviser en 3 props