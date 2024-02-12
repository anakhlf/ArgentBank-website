import React from 'react';
import "./style.css";

function FeatureItem({ src, title, description }) {
    return (
        <div className="feature-item">
            <img src={src} alt={title} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureItem;