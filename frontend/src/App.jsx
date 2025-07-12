import { Button } from '@radix-ui/themes'
import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { Toaster } from "sonner";
 

function App() {

  return (
    <>
      <Toaster position="top-center" richColors />
      {/* First we need the navbar component which is static accross all pages */}
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create-product" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App
