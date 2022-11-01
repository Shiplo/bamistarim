import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './room.module.scss'
import Layout from '../../src/components/layout'


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
    <Layout header='show' footer='hide' mainDir='ltr'>
      <section ref={vcontainer} className={`vertical-wrapper h-screen flex flex-nowrap flex-row-reverse ${styles.container}`} id='vertical-scroll'>
        <div className={`v-section h-screen w-screen flex content-center overflow-hidden justify-center bg-slate-400 ${styles.section}`}>
          <h2 className='m-auto'>Section One</h2>
        </div>
        <div className={`v-section h-screen w-screen flex items-center overflow-hidden justify-center bg-neutral-300 ${styles.section}`}>
            <h2 className='m-auto'>Section Two</h2>
        </div>
        <div className={`v-section h-screen w-screen flex items-center overflow-hidden justify-center bg-red-200 ${styles.section}`}>
            <h2 className='m-auto'>Section Three</h2>
        </div>
        <div className={`v-section h-screen w-screen flex items-center overflow-hidden justify-center bg-lime-200 ${styles.section}`}>
            <h2 className='m-auto'>Section Foure</h2>
        </div>
      </section>
    </Layout>
  )
}
