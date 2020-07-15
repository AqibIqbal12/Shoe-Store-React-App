import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import {Cart} from './Components/Cart'

 const RoutesConfig = () => {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Routes>
      </Router>

    </div>
  )
}

export default RoutesConfig;
