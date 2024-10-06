import React, { useEffect } from 'react';
import Navbar from "./components/navbar"
import { initGA } from "./analytics/googleAnalytics"
import Button from './components/button';


import './App.css'

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <Navbar />
      <div className='h-32'></div>
      <Button label="Click Me" category="User Interaction" />
    </>
  )
}

export default App
