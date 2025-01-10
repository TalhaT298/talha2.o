import React from 'react'
import BootcampSlider from './BootcampSlider';
const Bootcamp = () => {
  return (
    <div className="lg:hidden block">
    <div className='max-w-[1400px] mx-auto py-12 lg:p-10' data-aos="">
        <div className="flex flex-wrap justify-around text-white p-3">
            <div className=''>
            {/* <h1 className='text-3xl mb-12 mt-20 font-bold text-center'>Services</h1> */}
            </div>
            {/* <div className="flex flex-wrap justify-center">
            
            <h6 className='md:mx-6 md:mt-6 pl-6 md:pl-0 '>Intensive training sessions to dominate the competition</h6>
        </div> */}
        </div>

        <div className="slider">
        <h1 className='text-3xl mb-12 mt-20 font-bold text-center'>Services</h1>
        <BootcampSlider />
        </div>
    </div>
    {/* <img className=' mx-auto' src={line} alt="" />   */}
    </div>
  )
}

export default Bootcamp
