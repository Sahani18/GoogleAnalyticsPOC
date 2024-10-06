import React, { useEffect } from 'react';
import Navbar from "./components/navbar"
import {initGA} from "./analytics/googleAnalytics"

import Home from "./components/home";

import './App.css'

function App() {
  useEffect(() => {
    initGA();
  }, []);



  return (
    <>
      <Navbar />
      <Home />

    </>
  )
}

export default App
