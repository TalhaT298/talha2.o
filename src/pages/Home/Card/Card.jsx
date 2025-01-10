import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="hidden lg:block">
      {/* Section Heading */}
       

      {/* Card Container */}
      <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="cardtalha">
          <div className="row pl-8">
            <div className="icon">1</div>
            <div className="description">
              <h4>Full Stack Development</h4>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="cardtalha">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Frontend Web Development</h4>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="cardtalha">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>React JS Development</h4>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="cardtalha">
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>MERN Stack Development</h4>
            </div>
          </div>
        </label>

        <input type="radio" name="slide" id="c5" />
        <label htmlFor="c5" className="cardtalha">
          <div className="row">
            <div className="icon">5</div>
            <div className="description">
              <h4>Clean Coding</h4>
            </div>
          </div>
        </label>
        <div className='flex flex-col lg:block px-16 pt-6'>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl mt-4 font-bold text-center'>S</h1>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl  font-bold text-center'>e</h1>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl  font-bold text-center'>r</h1>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl  font-bold text-center'>v</h1>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl font-bold text-center'>i</h1>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl  font-bold text-center'>c</h1>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl  font-bold text-center'>e</h1>
        <h1 className=' lg:text-4xl md:text-4xl text-3xl font-bold text-center'>s</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
