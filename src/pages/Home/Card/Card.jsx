import React from 'react'
import './Card.css';
const Card = () => {
  return (
    <div className='hidden lg:block'>
     <h1 className='text-3xl lg:hidden font-bold text-center mt-6'>Services</h1>
      <div className="wrapper ">
        <div className="container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="cardtalha">
            <div className="row">
              <div className="icon">1</div>
              <div className="description">
                <h4 className='pt-100 pl-60'>Full Stack Development</h4>
                {/* <p className=''>I am skilled in Node JS, Express, JWT and Firebase. Proficient in implementing Mongo DB database. More than 6 months of experience with Full Stack development. I love coding the most and learning and researching new technologies</p> */}
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="cardtalha">
            <div className="row">
              <div className="icon">2</div>
              <div className="description">
                <h4 className='pt-100 pl-60'>Frontend Web Development</h4>
                {/* <p>Working as a frontend web developer for more than 1+ year. I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code.</p> */}
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="cardtalha">
            <div className="row">
              <div className="icon">3</div>
              <div className="description">
                <h4 className='pt-100 pl-80'>React JS Development</h4>
                {/* <p>I have worked on 8 different React JS projcts. Also have a little working experience with Next JS.</p> */}
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="cardtalha">
            <div className="row">
              <div className="icon">4</div>
              <div className="description">
                <h4 className='pt-100 pl-80'>MERN Stack Development</h4>
                {/* <p>Working as a React JS developer for more than a year. I have worked on 8 different React JS projcts. Also have a little working experience with Next JS.</p> */}
              </div>
            </div>
          </label>
          <input type="radio" name="slide" id="c5" />
          <label htmlFor="c5" className="cardtalha">
            <div className="row">
              <div className="icon">5</div>
              <div className="description">
                <h4 className='pt-100 pl-80'>Clean coding</h4>
                {/* <p>Space engineering becomes more and more advanced</p> */}
              </div>
            </div>
          </label>
        </div>
        <div className='flex flex-col  lg:block'>
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
  )
}

export default Card
