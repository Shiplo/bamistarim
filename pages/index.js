import { useEffect, useRef } from 'react'
import Layout from '../src/components/layout'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from '../src/styles/home.module.scss'
import Landing from '../src/components/home/landing'


export default function Index() {
  //console.log(logo);

  gsap.registerPlugin(ScrollTrigger);

  let vcontainer = useRef(null);

  useEffect(() => {
    const section = vcontainer.current;
    let sections = section.querySelectorAll('.v-section');
    //console.log(sections);
    gsap.set(sections, {xPercent: -100 * (sections.length - 1)});
    gsap.to(sections, {
      xPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + section.offsetWidth
      }
    });
  }, []);

  return (
    <Layout header='hide' footer='hide'>
      <section ref={vcontainer} className={`vertical-wrapper h-screen flex flex-nowrap flex-row-reverse ${styles.container}`} id='vertical-scroll'>
        <div className={`v-section h-full w-screen flex content-center justify-center ${styles.color1}`}>
          <Landing />
        </div>
        <div className='v-section h-full w-screen bg-red-500'></div>
        <div className='v-section h-full w-screen bg-lime-500'></div>
        <div className='v-section h-full w-screen bg-sky-500'></div>
      </section>
    </Layout>
  )
}
