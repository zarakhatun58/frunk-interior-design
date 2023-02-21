import React from 'react';
import Header from '../Header/Header';
import Display from './../Display/Display';
import Cart from './../Cart/Cart';
import ProductInfo from './../ProductInfo/ProductInfo';
import InteriorDisplay from '../InteriorDesign/InteriorDisplay';
import Wonder from './../Wonder/Wonder';
import About from '../About/About';
import LetterNews from '../NewsLetter/LetterNews';
import StepperWonder from '../Wonder/StepperWonder';
import WhyUs from '../WhyUs/WhyUs';
import Platform from '../Platform/Platform';
import ClickableBox from '../ClickableBox/ClickableBox';

const Home = () => {
    return (
        <div>
          <Display/>
          <Cart/>
          <ProductInfo/>
          <InteriorDisplay />
          <Platform/>
          <ClickableBox/>
          <Wonder/>
          <WhyUs/>
          {/* <StepperWonder/> */}
          <About/>
          <LetterNews />
        
        </div>
    );
};

export default Home;