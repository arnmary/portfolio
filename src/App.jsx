import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/reset.css';
import './App.css';
import '../src/Style.css';
import '../src/MinScreen.css'
import Header from './components/Header';
import Description from './components/Description';
import SecondBlock from './components/SecondBlock';
import AboutBlock from './components/AboutBlock';
import Skills from './components/Skills';
import PortfolioBlock from './components/PortfolioBlock';
import ContactBlock from './components/ContactBlock';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Header/>
    <Description/>
    <SecondBlock/>
    <AboutBlock/>
    <Skills/>
    <PortfolioBlock/>
    <ContactBlock/>
    <Footer/>
    </>
  )
}

export default App
