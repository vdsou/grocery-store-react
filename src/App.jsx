import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Products from './components/Products';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Features />
      <Products />
      <Categories />
      <Reviews />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
