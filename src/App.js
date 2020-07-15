import React from 'react';
import Routes from './Routes';
import { CartProvider } from './context/CartContext';
import {Footer} from './Components/Home/Footer'

export default function App() {
  return (
    <CartProvider>
    <div>
      <Routes/>
      <Footer/>
    </div>
    </CartProvider>
  )
}
