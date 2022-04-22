import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Listing from './components/pages/Listing';
import Form from './components/form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/formulario">
            <Route path=":filmeId" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
