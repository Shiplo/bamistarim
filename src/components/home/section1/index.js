import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image';
import { motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "./section1.module.scss"
import arrow from '../../../../public/images/arrow-left.png';
import bgImage from '../../../../public/images/home-section2.jpg';
import buttonBg from '../../../../public/images/button-bg.png';
import SectionBg from '../sectionBg';
// Import Swiper Use
import { useSwiper, useSwiperSlide } from 'swiper/react';
import Magnetic from '../../magic-button';

function Section1() {
    const bgData = {
        "bgImage": bgImage
    }
    // Swiper 
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    // GSAP Split text
    useEffect(() => {  
        if(swiperSlide.isActive){
            gsap.set('.ptitle', {y: 100, opacity: 0}); 
            gsap.set('.content', {y: 100, opacity: 0});   
            gsap.set('.button', {y: 100, opacity: 0});
            gsap.to('.ptitle', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0 })
            gsap.to('.content', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.2 })
            gsap.to('.button', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.4 })
        }
    }, [swiperSlide.isActive]);

  return (
    <>
        <SectionBg data={bgData} />
        <div className={`section-wrapper relative z-20 ${styles.wrapper}`}>
            <h2 className={`ptitle ${styles.title}`}>נעים מאד,</h2>
            <div className={`content ${styles.content}`} >
                <p>אנחנו רוז ושרה. יש לנו סיפור מיוחד שאנחנו מתרגשות לספר. הוא מתחיל על האניה בדרך לארץ ישראל...</p>
            </div>
            <Magnetic className={`p-10 -mr-10 ${styles.magnetic}`}>
                <button 
                onClick={() => swiper.slideNext()}
                className={`button ${styles.button}`}>
                    <span className='text'>לסיפור שלנו</span>
                    <span className={`flex items-center justify-center ${styles.icon}`} style={{backgroundImage: `url(${buttonBg.src})`}}>
                        <Image 
                        width={arrow.width}
                        height={arrow.height}
                        className={`inline-block ${styles.image}`} src={arrow.src} alt="<-" />
                    </span>
                </button>
            </Magnetic>
        </div>
    </>
  )
}

export default Section1