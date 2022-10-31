import { useEffect, useRef } from 'react'
import Layout from '../src/components/layout'
import { gsap } from 'gsap'
import { Flip } from 'gsap/dist/Flip'
import styles from '../src/styles/story.module.scss'
import Link from 'next/link'
import bgImage from '../public/images/story-bg.jpg'
import story1 from '../public/images/story1.png'
import story2 from '../public/images/story2.png'
import story3 from '../public/images/story3.png'
import story4 from '../public/images/story4.png'


export default function Index() {
  //console.log(logo);

  gsap.registerPlugin(Flip);

  let flipSection = useRef(null);

  useEffect(() => {
    const section = flipSection.current;
    let cards = section.querySelectorAll('.flip-box');
    //console.log(sections);
    // Animation

    cards.forEach((el) => {
      el.addEventListener("mouseenter", () => animateCard(el));
      el.addEventListener("mouseleave", () => animateCard(el));
    });

    function animateCard(el) {
      const cardImage = el.querySelector("img");
      const state = Flip.getState(cards);
      const imageState = Flip.getState(cardImage);
      el.classList.toggle("active");
      Flip.from(state, {
        ease: "power1.inOut",
        absolute: true
      });
      Flip.from(imageState, {
        ease: "power1.inOut",
        duration: 0.4,
        delay: 0.1
      });
    }
  }, []);

  return (
    <Layout header='show' footer='hide' mainDir='ltr'>
      <section 
      style={{backgroundImage: `url(${bgImage.src})`}}
      className={`vertical-wrapper h-screen w-screen flex flex-nowrap flex-row-reverse ${styles.container}`}>
        <div ref={flipSection} className={`v-section h-full w-screen flex content-center overflow-hidden justify-center ${styles.color1} ${styles.section}`}>
          <div className='flip-box'>
            <img src={story1.src} alt={'Story 1'} />
          </div>
          <div className='flip-box'>
            <img src={story2.src} alt={'Story 2'} />
          </div>
          <div className='flip-box'>
            <img src={story3.src} alt={'Story 3'} />
          </div>
          <div className='flip-box'>
            <img src={story4.src} alt={'Story 4'} />
          </div>
        </div>
        <h2>Story One</h2>
        <Link href={'/'}>Home Page</Link>
      </section>
    </Layout>
  )
}
