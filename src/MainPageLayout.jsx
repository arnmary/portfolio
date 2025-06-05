import React from 'react';
import Header from './components/Header';
import Description from './components/Description';
import SecondBlock from './components/SecondBlock';
import AboutBlock from './components/AboutBlock';
import Skills from './components/Skills';
import PortfolioBlock from './components/PortfolioBlock';
import ContactBlock from './components/ContactBlock';
import Footer from './components/Footer';

export default function MainPageLayout() {
  return (
    <>
      <Header />
      <Description />
      <SecondBlock />
      <AboutBlock />
      <Skills />
      <PortfolioBlock />
      <ContactBlock />
      <Footer />
    </>
  );
}
