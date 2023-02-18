import React from 'react';
import Header from '../Header/Header';
import Display from './../Display/Display';
import Cart from './../Cart/Cart';
import ProductInfo from './../ProductInfo/ProductInfo';
import InteriorDisplay from '../InteriorDesign/InteriorDisplay';

const Home = () => {
    return (
        <div>
          <Display/>
          <Cart/>
          <ProductInfo/>
          <InteriorDisplay />
        </div>
    );
};

export default Home;