import React from 'react';
import "./style.css"

import FeatureItem from '../../components/FeatureItem';

// Importer les images
import chatIcon from '../../../assets/img/icon-chat.webp';
import moneyIcon from '../../../assets/img/icon-money.webp';
import securityIcon from '../../../assets/img/icon-security.webp';

// Tableau avec les imports d'images
const valuesList = [
    {
        "id": "1",
        "src": chatIcon,
        "title": "You are our #1 priority",
        "description": "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        "id": "2",
        "src": moneyIcon,
        "title": "More savings means higher rates",
        "description": "The more you save with us, the higher your interest rate will be!"
    },
    {
        "id": "3",
        "src": securityIcon,
        "title": "Security you can trust",
        "description": "We use top of the line encryption to make sure your data and money is always safe."
    }
];

function Values () {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {valuesList.map(value => (
                <FeatureItem
                    key={value.id}
                    src={value.src}
                    title={value.title}
                    description={value.description}
                />
            ))}
        </section>
    );
}

export default Values;
