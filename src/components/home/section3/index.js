import React, { useEffect } from 'react';
import { gsap } from 'gsap'
import Image from 'next/image';
import bgImage from '../../../../public/images/home-section3.jpg';
import SectionBg from '../sectionBg';
import styles from './section3.module.scss';
import arrow from '../../../../public/images/arrow-left.png';
import buttonBg from '../../../../public/images/button-bg.png';
import icon1 from '../../../../public/images/icon1.png';
import icon2 from '../../../../public/images/icon2.png';
import Link from 'next/link';
// Import Swiper Use
import { useSwiper, useSwiperSlide } from 'swiper/react';
import Magnetic from '../../magic-button';

function Section3() {
  const data = {
    "bgImage": bgImage
  }
  // Animations
  const swiperSlide = useSwiperSlide();
  // GSAP Split text
  useEffect(() => {  
      if(swiperSlide.isActive){
          gsap.set('.title', {y: 100, opacity: 0}); 
          gsap.set('.content', {y: 100, opacity: 0}); 
          gsap.set('.button', {y: 100, opacity: 0});
          gsap.set('.bottom', {y: 100, opacity: 0});
          gsap.to('.title', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0 })
          gsap.to('.content', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.3 })
          gsap.to('.button', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.6 })
          gsap.to('.bottom', {y:0, opacity: 1, ease:"ease.inOut", duration: 1, delay:0.9 })
      }
  }, [swiperSlide.isActive]);
  return (
    <>
      <SectionBg data={data} />
      <div className={`section-wrapper relative z-20 ${styles.wrapper}`}>
          <div className='section-top'>
            <h2 className={`title ${styles.title}`}>אנחנו לא היינו הילדים היחידים שהתחבאו.</h2>
            <div className={`content ${styles.content}`} >
              <p>אלו היו הסיפורים שלנו, שרה ורוז,כמונו היו אלפי ילדים, תינוקות, נערים ונערות מכל מיני מקומות. לכל אחד מהם היה סיפור משלו.</p>
            </div>
            <div className={`button ${styles.button}`}>
              <Link href="/story">
                <Magnetic className={`relative p-10 -mr-10 ${styles.magneticLink}`}>
                  <button className={styles.link}>
                    <span className='text'>רוצים  לפגוש עוד סיפורים?</span>
                    <span className={`flex items-center justify-center ${styles.icon}`} style={{backgroundImage: `url(${buttonBg.src})`}}>
                        <Image 
                        width={arrow.width}
                        height={arrow.height}
                        className={`inline-block ${styles.image}`} src={arrow.src} alt="<-" />
                    </span>
                  </button>
                </Magnetic>
              </Link>
            </div>
          </div>
          <div className={`bottom flex p-5 items-center rounded ${styles.infoBox}`}>
            <div className={`w-3/6 ml-5 ${styles.right}`}>
              <h3 className={styles.subtitle}>שימו לב!</h3>
              <p>במהלך הסיור חפשו פרטים נוספים על ילדי המסתור:</p>
            </div>
            <div className={`w-3/6 ${styles.left}`}>
              <div className={styles.infoWrapper}>
                <Magnetic>
                  <button className={`flex items-center justify-start rounded mb-2.5 w-full bg-white hover:bg-stone-200 transition-colors ${styles.infoButton}`} >
                    <span className={`flex items-center justify-center ${styles.infoIcon}`}>
                      <Image 
                      width={icon1.width}
                      height={icon1.height}
                      className={`inline-block ${styles.infoImage}`} src={icon1.src} alt="“" />
                    </span>
                    <span className={styles.infoText}>עדויות של ניצולים</span>
                  </button>
                </Magnetic>
              </div>
              <div className={styles.infoWrapper}>
                <Magnetic>
                  <button className={`flex items-center justify-start rounded w-full bg-white hover:bg-stone-200 transition-colors ${styles.infoButton}`} >
                    <span className={`flex items-center justify-center ${styles.infoIcon}`}>
                      <Image 
                      width={icon2.width}
                      height={icon2.height}
                      className={`inline-block ${styles.infoImage}`} src={icon2.src} alt="“" />
                    </span>
                    <span className={styles.infoText}>שאלות לסקרנים</span>
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Section3