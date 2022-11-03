import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { gsap } from 'gsap'
import Image from 'next/image';
import bgImage from '../../../../public/images/home-section3.jpg';
import SectionBg from '../sectionBg';
import styles from './section2.module.scss';
import arrow from '../../../../public/images/arrow-left.png';
import buttonBg from '../../../../public/images/button-bg.png';
import play from '../../../../public/images/play-small.svg';
// Import Swiper Use
import { useSwiper, useSwiperSlide } from 'swiper/react';
import Magnetic from '../../magic-button';

function Section2() {
    const data = {
        bgImage: bgImage
    }
    const videoData = {
        video: "https://bamistarim.ganzach.org.il/wp-content/uploads/2022/11/video.mp4",
        caption: "גרסת סקיצה לסרטון אנימציה המספר את הסיפור של רוז ושרה. המעודכן יגיע בקרוב"
    };
    // Use State
    const [playVideo, setPlayvideo] = useState(false);
    //const videoPlay = useRef(null);
    const videoPlay = () => {
        let videoWrap = document.getElementById('video');
        let video = videoWrap.querySelector('video');
        if(!playVideo) {
            video.play();
            setPlayvideo(!playVideo);
        } else {
            video.pause();
            setPlayvideo(!playVideo);
        }
        
    }
    // Swiper 
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    // GSAP Split text
    useEffect(() => {  
        if(swiperSlide.isActive){
            gsap.set('.section-video', {y: 100, opacity: 0}); 
            gsap.set('.button', {y: 100, opacity: 0});
            gsap.to('.section-video', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0 })
            gsap.to('.button', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.4 })
        }
    }, [swiperSlide.isActive]);
  return (
    <>
        <SectionBg data={data} />
        <div className={`section-wrapper flex flex-wrap relative z-20 ${styles.wrapper}`}>
            <div className={`section-video relative ${styles.video} ${playVideo && "playing"}`}>
                <ReactPlayer 
                id="video"
                className={'relative z-10'}
                controls
                width="100%"
                height={'auto'}
                url={[
                    {src: videoData.video, type: 'video/mp4'}
                ]}
                />
                <div id="caption" 
                className={`absolute z-20 top-0 left-0 w-full h-full ${styles.captionWrapper} ${playVideo && "opacity-0"} transition-all`}>
                    <button onClick={() => videoPlay()} 
                    className='play-btn absolute left-1/2 top-1/2 rounded-full transition-colors'>
                        <Image src={play} alt={'Play'} />
                    </button>
                    <div className={`absolute text-white ${styles.caption}`}>{videoData.caption}</div>
                </div>
            </div>
            
            <Magnetic 
            className={`relative inline-block mr-auto p-10 -ml-10 ${styles.magnetic}`}>
                <button 
                onClick={() => swiper.slideNext()}
                className={`button ${styles.button}`}>
                    <span className='text'>רוצים  לפגוש עוד סיפורים?</span>
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

export default Section2