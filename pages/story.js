import { useEffect, useRef } from 'react'
import Image from 'next/image';
import Layout from '../src/components/layout'
import { gsap } from 'gsap'
import { Flip } from 'gsap/dist/Flip'
import styles from '../src/styles/story.module.scss'
import bgImage from '../public/images/story-bg.jpg'
import story1 from '../public/images/story1.png'
import story2 from '../public/images/story2.png'
import story3 from '../public/images/story3.png'
import story4 from '../public/images/story4.png'
import play from '../public/images/play.svg'
import curve from '../public/images/curve-text.svg'


export default function Index() {
  //console.log(logo);

  gsap.registerPlugin(Flip);

  let flipSection = useRef(null);

  useEffect(() => {
    const section = flipSection.current;
    let cards = section.querySelectorAll('.flip-box');
    //console.log(sections);
    // Animation
    console.log(cards);

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
      className={`vertical-wrapper bg-cover bg-no-repeat bg-center h-screen w-screen flex items-center justify-center ${styles.container}`}>
        <div ref={flipSection} className={`v-section h-full w-full flex justify-center items-center ${styles.flipWrapper}`}>
          <div className='flip-box'>
            <Image 
            width={story1.width}
            height={story1.height}
            src={story1.src} alt={'Story 1'} />
          </div>
          <div className='flip-box'>
            <Image 
            width={story2.width}
            height={story2.height}
            src={story2.src} alt={'Story 2'} />
          </div>
          <div className='flip-box'>
            <Image 
            width={story3.width}
            height={story3.height}
            src={story3.src} alt={'Story 3'} />
          </div>
          <div className='flip-box'>
            <Image 
            width={story4.width}
            height={story4.height}
            src={story4.src} alt={'Story 4'} />
          </div>
        </div>
        <div className={`absolute ${styles.buttonWrapper}`}>
          <button className={`${styles.flipButton} flex justify-center items-center relative z-20 rounded-full bg-white`}>
            <Image 
            width={play.width}
            height={play.height}
            src={play.src} alt="Play" />
          </button>
          <div className={`${styles.curveText} transition-all z-10 absolute`}>
            <Image 
            width={curve.width}
            height={curve.height}
            src={curve.src} alt="Curve Text" />
          </div>
        </div>
      </section>
    </Layout>
  )
}
