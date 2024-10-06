import React from 'react';
import { trackClickEvent } from '../analytics/googleAnalytics';

const Button = ({ label, category }) => {
    const handleClick = () => {
        trackClickEvent(category, label);
    };

    return <button onClick={handleClick} className='rounded-md bg-green-500 text-black p-2 border-2 border-gray-800'>Capture {label}</button>

};

export default Button;
