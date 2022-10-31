import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "./section1.module.scss"
import arrow from '../../../../public/images/arrow-left.png';
import bgImage from '../../../../public/images/home-section2.jpg';
import buttonBg from '../../../../public/images/button-bg.png';
import SectionBg from '../sectionBg';
// Import Swiper Use
import { useSwiper } from 'swiper/react';

function Section1() {
    const bgData = {
        "bgImage": bgImage
    }
    // Swiper 
    const swiper = useSwiper();
  return (
    <>
        <SectionBg data={bgData} />
        <div className={`section-wrapper relative z-20 ${styles.wrapper}`}>
            <h2 className={styles.title}>נעים מאד,</h2>
            <div className={styles.content} >
                <p>אנחנו רוז ושרה. יש לנו סיפור מיוחד שאנחנו מתרגשות לספר. הוא מתחיל על האניה בדרך לארץ ישראל...</p>
            </div>
            <button 
            onClick={() => swiper.slideNext()}
            className={`${styles.button}`}>
                <span className='text'>לסיפור שלנו</span>
                <span className={`flex items-center justify-center ${styles.icon}`} style={{backgroundImage: `url(${buttonBg.src})`}}>
                    <Image 
                    width={arrow.width}
                    height={arrow.height}
                    className={`inline-block ${styles.image}`} src={arrow.src} alt="<-" />
                </span>
            </button>
        </div>
    </>
  )
}

export default Section1