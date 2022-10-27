import React from 'react'
import styles from "./section1.module.scss"
import arrow from '../../../../public/images/arrow-left.png';

function Section1() {
  return (
    <>
        <div className={`section-wrapper ${styles.wrapper}`}>
            <h2 className={`${styles.title}`}>נעים מאד,</h2>
            <p>אנחנו רוז ושרה. יש לנו סיפור מיוחד שאנחנו מתרגשות לספר. הוא מתחיל על האניה בדרך לארץ ישראל...</p>
            <button className={`${styles.button}`}>
                <span className='icon'><img className='inline-block' src={arrow.src} alt="<-" /></span>
                <span className='text'>לסיפור שלנו</span>
            </button>
        </div>
    </>
  )
}

export default Section1