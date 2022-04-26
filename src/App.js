import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import { ProductProvider } from './contexts/ProductContext';
import Menu from './components/Menu';
import React from 'react'
import Wrapper from './components/Wrapper';
import { ContrastProvider } from './contexts/ContrastContext';

function App() {

  return (
    <ProductProvider>
      <ContrastProvider>
      <Router>
        <Wrapper>
        <Menu/>
        <Routes>
          <Route exact path="/product/:id" element={<ProductDetails/>} />
          <Route exact path="/" element={<Products/>}/>
        </Routes>
        </Wrapper>
      </Router>
      </ContrastProvider>
    </ProductProvider>
  );
}

export default App;
