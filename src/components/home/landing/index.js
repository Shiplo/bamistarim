import React from 'react'
import logo from '../../../../public/images/logo.png';
import arrow from '../../../../public/images/arrow-left.png';

function Landing() {
  return (
    <>
        <div className='section-bg fixed top-0 left-0 w-full h-full z-10'>
            <div className='bg-image absolute top-0 left-0 w-full h-full z-10'></div>
            <div className='bg-mask1 absolute top-0 left-0 w-full h-full z-12'></div>
            <div className='bg-mask2 absolute top-0 left-0 w-full h-full z-13'></div>

        </div>
        <div className='landing-wrapper m-auto relative z-20 text-center'>
            <img src={logo.src} alt="םירתסמב" />
            <h1>םירתסמב</h1>
            <h2>האושה תפוקתב רותסמ ידלי לש םרופיס</h2>
            <button className='next-section'>
                <img src={arrow.src} alt="<-" />
            </button>
        </div>
    </>
  )
}

export default Landing