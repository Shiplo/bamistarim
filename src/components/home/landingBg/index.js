import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion, transform } from "framer-motion"
import styles from "./landingBg.module.scss"

function LandingBg({data}) {
  return (
    <>
        <div className='section-bg absolute top-0 left-0 w-full h-full z-10'>
            <div className='bg-image absolute top-0 left-0 w-full h-full z-auto'>
                <LazyLoadImage 
                className='object-cover object-center w-full h-full' 
                src={data.bgImage.src} 
                height={data.bgImage.height} 
                width={data.bgImage.width}
                alt="Section BG" />
            </div>
            <motion.div 
            initial={{ x: "-15%" }} 
            animate={{ x: "0" }} 
            transition={{duration: 1 }}
            className={`absolute left-0 top-0 w-auto z-10 ${styles.float1}`}>
                <img className={'block'} 
                src={data.float1.src} 
                height={data.float1.height} 
                width={data.float1.width}
                alt="Image" />
            </motion.div>
            <motion.div 
            initial={{ y: "15%" }} 
            animate={{ y: "0" }} 
            transition={{duration: 1 }}
            className={`absolute left-0 bottom-0 w-auto z-10 ${styles.float2}`}>
                <img className={'block'} 
                src={data.float2.src} 
                height={data.float2.height} 
                width={data.float2.width}
                alt="Image" />
            </motion.div>
            <motion.div 
            initial={{ x: "15%" }} 
            animate={{ x: "0" }} 
            transition={{duration: 1 }}
            className={`absolute right-0 top-0 w-auto z-10 ${styles.float3}`}>
                <img className={'block'} 
                src={data.float3.src} 
                height={data.float3.height} 
                width={data.float3.width}
                alt="Image" />
            </motion.div>
            <div className='bg-mask1 absolute top-0 left-0 w-full h-full z-40 bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${data.bgMask.src})`}}></div>
            <div className='bg-mask2 absolute top-0 left-0 w-full h-full z-50 opacity-70' style={{backgroundColor: "#223A57"}}></div>

        </div>
    </>
  )
}

export default LandingBg