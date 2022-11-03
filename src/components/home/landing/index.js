import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from "./landing.module.scss"
import logo from '../../../../public/images/logo.png';
import arrow from '../../../../public/images/arrow-left.png';
import bgImage from '../../../../public/images/home-section1.jpg';
import float1 from '../../../../public/images/bg-float1.png';
import float2 from '../../../../public/images/bg-float2.png';
import float3 from '../../../../public/images/bg-float3.png';
import bgMask from '../../../../public/images/bg-mask1.png';
import LandingBg from '../landingBg';
import { gsap } from 'gsap'
import { SplitText } from 'gsap/dist/ScrollTrigger';
import MagneticButton from '../../magic-button/index'
// Import Swiper Use
import { useSwiper, useSwiperSlide } from 'swiper/react';
import Magnetic from '../../magic-button/index';

function Landing(isActive) {
    const swiperSlide = useSwiperSlide();

    const pageData = {
        bgData: {
            bgImage: bgImage,
            float1: float1,
            float2: float2,
            float3: float3,
            bgMask: bgMask,
        },
        title: "םירתסמב",
        subtitle: "האושה תפוקתב רותסמ ידלי לש םרופיס"
    }
    // Split Text
    /*let ElText = pageData.title;
    
    const chars = ElText.split('');
    
    var res = chars.map(function(el, i) {
        return `<span>${el}</span>`;
    }).join('');
    
    pageData.title = res;*/

    // Swiper 
    const swiper = useSwiper();
    //console.log(swiperSlide.isActive);

    // GSAP Split text
    useEffect(() => {  
        gsap.set('.logo', {y: 100, opacity: 0}); 
        gsap.set('.title', {y: 100, opacity: 0}); 
        gsap.set('.subtitle', {y: 100, opacity: 0});   
        gsap.set('.next-section', {y: 100, opacity: 0});   
        gsap.to('.logo', {y:0, opacity: 1, ease:"ease.in", duration: 1})
        gsap.to('.title', {y:0, opacity: 1, ease:"ease.out", duration: 1, delay:0.2 })
        gsap.to('.subtitle', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.4 })
        gsap.to('.next-section', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.6 })
    }, [swiperSlide.isActive]);

  return (
    <>
        <LandingBg data={pageData.bgData} />
        <div id="landing" className='landing-wrapper m-auto relative z-20 text-center'>
            <Image 
            width={logo.width}
            height={logo.height}
            className={`logo inline-block ${styles.logo}`} src={logo.src} alt="םירתסמב" />

            <h1 
            className={`title title-font text-white ${styles.title}`}>{pageData.title}</h1>

            <h2 
            className={`subtitle title-font text-5xl ${styles.subtitle}`}>{pageData.subtitle}</h2>
            
            <Magnetic className={`relative inline-block p-10 ${styles.magnetic}`}>
                <button 
                onClick={() => swiper.slideNext()}
                className={`next-section ml-auto mr-auto flex items-center justify-center bg-white w-12 h-12 md:w-10 md:h-10 text-center rounded-full ${styles.button}`}>
                    <Image 
                    width={arrow.width}
                    height={arrow.height}
                    className={`inline-block ${styles.iconImage}`} src={arrow.src} alt="<-" />
                </button>
            </Magnetic>
        </div>
    </>
  )
}

export default Landing