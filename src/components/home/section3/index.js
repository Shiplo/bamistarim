import React from 'react';
import bgImage from '../../../../public/images/home-section3.jpg';
import SectionBg from '../sectionBg';
import styles from './section3.module.scss';
import arrow from '../../../../public/images/arrow-left.png';
import buttonBg from '../../../../public/images/button-bg.png';
import icon1 from '../../../../public/images/icon1.png';
import icon2 from '../../../../public/images/icon2.png';

function Section3() {
  const data = {
    "bgImage": bgImage
  }

  return (
    <>
      <SectionBg data={data} />
      <div className={`section-wrapper relative z-20 ${styles.wrapper}`}>
            <div className='section-top'>
              <h2 className={styles.title}>אנחנו לא היינו הילדים היחידים שהתחבאו.</h2>
              <div className={styles.content} >
                <p>אלו היו הסיפורים שלנו, שרה ורוז,
  כמונו היו אלפי ילדים, תינוקות, נערים ונערות מכל מיני מקומות. לכל אחד מהם היה סיפור משלו.</p>
              </div>
              <button className={`${styles.button}`}>
                  <span className={styles.icon} style={{backgroundImage: `url(${buttonBg.src})`}}>
                      <img className={`inline-block ${styles.image}`} src={arrow.src} alt="<-" />
                  </span>
                  <span className='text'>רוצים  לפגוש עוד סיפורים?</span>
              </button>
            </div>
            <div className={`flex flex-row-reverse p-5 items-center rounded ${styles.infoBox}`}>
              <div className={`w-3/6 ml-5 ${styles.right}`}>
                <h3 className={styles.subtitle}>שימו לב!</h3>
                <p>במהלך הסיור חפשו פרטים נוספים על ילדי המסתור:</p>
              </div>
              <div className={`w-3/6 ${styles.left}`}>
                <div className={styles.infoWrapper}>
                  <button className={`flex items-center justify-end rounded mb-2.5 w-full bg-white hover:bg-stone-200 transition-all ${styles.infoButton}`} >
                    <span className={styles.infoText}>עדויות של ניצולים</span>
                    <span className={styles.infoIcon}>
                      <img className={`inline-block ${styles.infoImage}`} src={icon1.src} alt="“" />
                    </span>
                  </button>
                </div>
                <div className={styles.infoWrapper}>
                  <button className={`flex items-center justify-end rounded w-full bg-white hover:bg-stone-200 transition-all ${styles.infoButton}`} >
                    <span className={styles.infoText}>שאלות לסקרנים</span>
                    <span className={styles.infoIcon}>
                      <img className={`inline-block ${styles.infoImage}`} src={icon2.src} alt="“" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Section3