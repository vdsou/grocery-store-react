import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our
        {' '}
        <span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/blog-1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-3.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
