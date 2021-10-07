// Categories
import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products
        {' '}
        <span>categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/cat-1.png" alt="" />
          <h3>vegetables</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src="image/cat-2.png" alt="" />
          <h3>fresh fruits</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src="image/cat-3.png" alt="" />
          <h3>dairy products</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src="image/cat-4.png" alt="" />
          <h3>freshh meat</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>
      </div>
    </section>
  );
}
