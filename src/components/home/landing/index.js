import React from 'react'
import { motion, transform } from "framer-motion"
import styles from "./landing.module.scss"
import logo from '../../../../public/images/logo.png';
import arrow from '../../../../public/images/arrow-left.png';
import bgImage from '../../../../public/images/home-section1.jpg';
import float1 from '../../../../public/images/bg-float1.png';
import float2 from '../../../../public/images/bg-float2.png';
import float3 from '../../../../public/images/bg-float3.png';
import bgMask from '../../../../public/images/bg-mask1.png';

function Landing() {
  return (
    <>
        <div className='section-bg fixed top-0 left-0 w-full h-full z-10'>
            <div className='bg-image absolute top-0 left-0 w-full h-full z-auto'>
                <motion.img 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{duration: 0.5 }}
                className='object-cover object-center w-full h-full' 
                src={bgImage.src} alt="Section BG" />
            </div>
            <motion.div 
            initial={{ x: "-15%" }} 
            animate={{ x: "0" }} 
            transition={{duration: 1 }}
            className={`absolute left-0 top-0 w-auto z-10 ${styles.float1}`}>
                <img className={'block'} src={float1.src} alt="Image" />
            </motion.div>
            <motion.div 
            initial={{ y: "15%" }} 
            animate={{ y: "0" }} 
            transition={{duration: 1 }}
            className={`absolute left-0 bottom-0 w-auto z-10 ${styles.float2}`}>
                <img className={'block'} src={float2.src} alt="Image" />
            </motion.div>
            <motion.div 
            initial={{ x: "15%" }} 
            animate={{ x: "0" }} 
            transition={{duration: 1 }}
            className={`absolute right-0 top-0 w-auto z-10 ${styles.float3}`}>
                <img className={'block'} src={float3.src} alt="Image" />
            </motion.div>
            <div className='bg-mask1 absolute top-0 left-0 w-full h-full z-40 bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${bgMask.src})`}}></div>
            <div className='bg-mask2 absolute top-0 left-0 w-full h-full z-50 opacity-70' style={{backgroundColor: "#223A57"}}></div>

        </div>
        <div className='landing-wrapper m-auto relative z-20 text-center'>
            <motion.img 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0%" }} 
            transition={{duration: 0.5 }}
            className='inline-block' src={logo.src} alt="םירתסמב" />

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
            className={`next-section bg-white w-12 h-12 text-center rounded-full ${styles.button}`}>
                <img className='inline-block' src={arrow.src} alt="<-" />
            </motion.button>
        </div>
    </>
  )
}

export default Landing