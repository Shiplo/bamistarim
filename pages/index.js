import { useEffect, useRef } from 'react'
import Layout from '../src/components/layout'
import styles from '../src/styles/home.module.scss'
import Landing from '../src/components/home/landing'
import Section1 from '../src/components/home/section1'
import Section2 from '../src/components/home/section2'
import Section3 from '../src/components/home/section3'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


export default function Index() {

  let vcontainer = useRef(null);

  return (
    <Layout header='hide' footer='hide' mainDir='ltr'>
      <Swiper 
      spaceBetween={0}
      slidesPerView={1}
      effect={"fade"}
      navigation={false}
      pagination={false}
      mousewheel={false}
      keyboard={false}
      allowTouchMove = {false}
      modules={[ EffectFade, Navigation, Pagination, Mousewheel, Keyboard ]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      ref={vcontainer} className={`vertical-wrapper ${styles.container}`} id='vertical-scroll'>
        <SwiperSlide className={`v-section relative h-screen w-screen flex content-center overflow-hidden justify-center ${styles.color1} ${styles.section}`}>
          <Landing />
        </SwiperSlide>
        <SwiperSlide className={`v-section relative h-screen w-screen flex content-center overflow-hidden justify-center ${styles.color2} ${styles.section}`}>
          <Section1 />
        </SwiperSlide>
        <SwiperSlide className={`v-section relative h-screen w-screen flex content-center overflow-hidden justify-center ${styles.color2} ${styles.section}`}>
          <Section2 />
        </SwiperSlide>
        <SwiperSlide className={`v-section relative h-screen w-screen flex content-center overflow-hidden justify-center ${styles.color2} ${styles.section}`}>
          <Section3 />
        </SwiperSlide>
      </Swiper>
    </Layout>
  )
}
