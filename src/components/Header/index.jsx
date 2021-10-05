import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import SearchForm from './SearchForm';
import ShoppingCart from './ShoppingCart';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </i>
        groco
      </a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#products">products</a>
        <a href="#categories">categories</a>
        <a href="#review">review</a>
        <a href="#blogs">blogs</a>
      </nav>
      <div className="icons">
        <button type="button" id="menu-btn">
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <button type="button" id="search-btn">
          <FontAwesomeIcon className="fa-icon" icon={faSearch} />
        </button>
        <button type="button" id="cart-btn">
          <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
        </button>
        <button type="button" id="user-btn">
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button>
      </div>
      <SearchForm />
      <ShoppingCart />
    </header>
  );
}
