import React, { useEffect } from 'react';
import { trackScreenView } from "../analytics/googleAnalytics"
import Button from './button';

const Home = () => {
    useEffect(() => {
        trackScreenView('/home');
    }, []);
    return (
        <>
            <p className='mx-auto text-green-800 text-500 pt-72 text-4xl'>Welcome to Google Analytics Demo</p>
            <p className='pt-12'>Click the button to capture event</p>
            <div className='h-5'></div>
            <Button label="Click Me" category="User Interaction" />
        </>
    )
}

export default Home;