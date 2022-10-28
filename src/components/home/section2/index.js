import React from 'react';
import Image from 'next/image';
import bgImage from '../../../../public/images/home-section3.jpg';
import SectionBg from '../sectionBg';
import styles from './section2.module.scss';
import arrow from '../../../../public/images/arrow-left.png';
import buttonBg from '../../../../public/images/button-bg.png';
import YoutubeEmbed from '../../youtube-embed';

function Section2() {
    const data = {
        "bgImage": bgImage
    }
    const videoID = "ymarrXoi0ZM";
  return (
    <>
        <SectionBg data={data} />
        <div className={`section-wrapper relative z-20 ${styles.wrapper}`}>
            <div className='section-video'>
                <YoutubeEmbed embedId={videoID} />
            </div>
            
            <button className={`${styles.button}`}>
                <span className={styles.icon} style={{backgroundImage: `url(${buttonBg.src})`}}>
                    <img 
                    width={arrow.width}
                    height={arrow.height}
                    className={`inline-block ${styles.image}`} src={arrow.src} alt="<-" />
                </span>
                <span className='text'>רוצים  לפגוש עוד סיפורים?</span>
            </button>
        </div>
    </>
  )
}

export default Section2