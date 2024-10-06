import React, { useEffect } from 'react';
import { trackScreenView } from "../analytics/googleAnalytics"

const Home = () => {
    useEffect(() => {
        trackScreenView('/home');
    }, []);
    return <p className='mx-auto text-green-800 text-500 pt-72 text-4xl'>Welcome to Google Analytics Demo</p>



}

export default Home;