import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function index() {
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
      <form action="" className="search-form">
        <label htmlFor="search-box">
          <input type="search" placeholder="search here..." id="search-box" />
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </label>
      </form>
    </header>
  );
}
