import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductBenefit from './components/ProductBenefit/ProductBenefit';
import FAQ from './components/FAQ/FAQ';
import { contentData } from './contentData';

function App() {
  return (
    <div className="App">
      <Navbar data={contentData.navbar} /> 
      <main>
        <Hero data={contentData.hero} />
        <Features data={contentData.features}/>
        <ProductBenefit data={contentData.productBenefit}/>
        <Testimonials data={contentData.testimonials} />
        <FAQ data={contentData.faq}/>
        <CTA data={contentData.cta} />
      </main>
      <Footer data={contentData.footer} /> 
    </div> 
  );
}

export default App;
