import React, { useState } from 'react';
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
import UserForm from './UserForm';
import './Header.css';
import Navbar from './Navbar';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeShoppingCart, setActiveShoppingCart] = useState(false);
  const [activeUserForm, setActiveUserForm] = useState(false);
  window.onscroll = () => {
    setActiveUserForm(false);
    setActiveShoppingCart(false);
    setActiveSearch(false);
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleSearchButton = () => {
    setActiveSearch(!activeSearch);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  const handleShoppingCartButton = () => {
    setActiveShoppingCart(!activeShoppingCart);
    setActiveSearch(false);
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  const handleUserFormButton = () => {
    setActiveUserForm(!activeUserForm);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveMenu(false);
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </i>
        groco
      </a>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <button type="button" id="search-btn" onClick={handleSearchButton}>
          <FontAwesomeIcon className="fa-icon" icon={faSearch} />
        </button>
        <button type="button" id="cart-btn" onClick={handleShoppingCartButton}>
          <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
        </button>
        <button type="button" id="user-btn" onClick={handleUserFormButton}>
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button>
      </div>
      <SearchForm active={activeSearch} />
      <ShoppingCart active={activeShoppingCart} />
      <UserForm active={activeUserForm} />
    </header>
  );
}
