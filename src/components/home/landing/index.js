import React from 'react';
import Image from 'next/image';
import { motion, transform } from "framer-motion"
import styles from "./landing.module.scss"
import logo from '../../../../public/images/logo.png';
import arrow from '../../../../public/images/arrow-left.png';
import bgImage from '../../../../public/images/home-section1.jpg';
import float1 from '../../../../public/images/bg-float1.png';
import float2 from '../../../../public/images/bg-float2.png';
import float3 from '../../../../public/images/bg-float3.png';
import bgMask from '../../../../public/images/bg-mask1.png';
import LandingBg from '../landingBg';

function Landing() {
    const bgData = {
        "bgImage": bgImage,
        "float1": float1,
        "float2": float2,
        "float3": float3,
        "bgMask": bgMask
    }
    function nextSection() {

    }

  return (
    <>
        <LandingBg data={bgData} />
        <div className='landing-wrapper m-auto relative z-20 text-center'>
            <motion.img 
            width={logo.width}
            height={logo.height}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }} 
            transition={{duration: 0.5 }}
            className={`inline-block ${styles.logo}`} src={logo.src} alt="םירתסמב" />

            <motion.h1 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }} 
            transition={{duration: 0.5 }}
            className={`title-font text-white ${styles.title}`}>םירתסמב</motion.h1>

            <motion.h2 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }} 
            transition={{duration: 0.5 }}
            className={`title-font text-5xl ${styles.subtitle}`}>האושה תפוקתב רותסמ ידלי לש םרופיס</motion.h2>
            
            <motion.button 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }} 
            transition={{duration: 0.5 }}
            onClick={() => nextSection()}
            className={`next-section bg-white w-12 h-12 md:w-10 md:h-10 text-center rounded-full ${styles.button}`}>
                <img 
                width={arrow.width}
                height={arrow.height}
                className={`inline-block ${styles.iconImage}`} src={arrow.src} alt="<-" />
            </motion.button>
        </div>
    </>
  )
}

export default Landing