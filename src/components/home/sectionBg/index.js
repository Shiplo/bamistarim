import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from "framer-motion"

function SectionBg({data}) {
  return (
   <>
        <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }} 
        transition={{duration: 0.5 }}
        className={`section-bg absolute left-0 top-0 w-full h-full z-10`} >
            <LazyLoadImage 
                className='object-cover object-center w-full h-full' 
                src={data.bgImage.src} 
                height={data.bgImage.height} 
                width={data.bgImage.width}
                alt="Section BG" />
        </motion.div>
   </>
  )
}

export default SectionBg