// User Form
import React from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

export default function UserForm(props) {
  const { active } = props;
  return (
    <form className={`user-form ${active ? 'active' : ''}`}>
      <h3>login now</h3>
      <div className="box">
        <input type="email" placeholder="your email" />
      </div>
      <div className="box">
        <input type="password" placeholder="your password" />
      </div>
      <p>
        forgot your password
        {' '}
        <a href="/">click here</a>
      </p>
      <p>
        don&apos;t have an account
        {' '}
        <a href="/">create now</a>
      </p>
      <button type="submit" className="btn">
        login now
      </button>
    </form>
  );
}
UserForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
