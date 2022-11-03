import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from "./landingBg.module.scss"
// Import Swiper Use
import { useSwiper, useSwiperSlide } from 'swiper/react';

function LandingBg({data}) {
    // Animations
    const swiperSlide = useSwiperSlide();
    // GSAP Split text
    useEffect(() => {  
        if(swiperSlide.isActive){
            gsap.set('.bg-image', {scale: 1.2, opacity: 0}); 
            gsap.set('.float1', {xPercent: -50, opacity: 0}); 
            gsap.set('.float2', {xPercent: -100, opacity: 0}); 
            gsap.set('.float3', {xPercent: 100, opacity: 0});
            gsap.set('.bottom', {y: 100, opacity: 0});
            gsap.to('.bg-image', {scale:1, opacity: 1, ease:"power.out", duration: 1, delay:0 })
            gsap.to('.float1', {xPercent:0, opacity: 1, ease:"power.out", duration: 1, delay:1 })
            gsap.to('.float2', {xPercent:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:1 })
            gsap.to('.float3', {xPercent:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:1 })
            gsap.to('.bottom', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.9 })
        }

        // Background Animation
        let container = document.querySelector('.body');
        container.addEventListener('mousemove', function(e) {
            parallaxIt(e, ".bg-image", -10);
            parallaxIt(e, ".bg-mask1", -50);
        });
        
        function parallaxIt(e, target, movement) {
            var relX = e.pageX - container.offsetLeft;
            var relY = e.pageY - container.offsetTop;
        
            gsap.to(target, 1, {
                x: (relX - container.offsetWidth / 2) / container.offsetWidth * movement,
                y: (relY - container.offsetHeight / 2) / container.offsetHeight * movement
            });
        }

    }, [swiperSlide.isActive]);
  return (
    <>
        <div className='section-bg absolute top-0 left-0 w-full h-full z-10'>
            <div className={`bg-image scale-105 absolute top-0 left-0 w-full h-full z-auto ${styles.bgImage}`}>
                <Image 
                className='object-cover object-center w-full h-full' 
                src={data.bgImage.src} 
                height={data.bgImage.height} 
                width={data.bgImage.width}
                alt="Section BG" />
            </div>
            <div 
            className={`float1 absolute left-0 top-0 w-auto z-10 ${styles.float1}`}>
                <Image 
                className={'block'} 
                src={data.float1.src} 
                height={data.float1.height} 
                width={data.float1.width}
                alt="Image" />
            </div>
            <div 
            className={`float2 absolute left-0 bottom-0 w-auto z-10 ${styles.float2}`}>
                <Image 
                className={'block'} 
                src={data.float2.src} 
                height={data.float2.height} 
                width={data.float2.width}
                alt="Image" />
            </div>
            <div 
            className={`float3 absolute right-0 top-0 w-auto z-10 ${styles.float3}`}>
                <Image 
                className={'block'} 
                src={data.float3.src} 
                height={data.float3.height} 
                width={data.float3.width}
                alt="Image" />
            </div>
            <div className='bg-mask1 absolute top-0 left-0 w-full h-full z-50 bg-center bg-no-repeat bg-cover scale-110' style={{backgroundImage: `url(${data.bgMask.src})`}}></div>
            <div className='bg-mask2 absolute top-0 left-0 w-full h-full z-40 opacity-70' style={{backgroundColor: "#223A57"}}></div>

        </div>
    </>
  )
}

export default LandingBg