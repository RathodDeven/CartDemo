import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
