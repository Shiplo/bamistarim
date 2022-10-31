import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import logo from '../../../../public/images/logo-black.svg'
import SoundIcon from '../../icons/soundIcon';
import Link from 'next/link';
import Nav from '../nav/nav';

function Header() {

  const [sound, setSound] = useState(true);

  return (
    <header className={`${styles.header} fixed h-screen top-0 right-0 bg-white z-50 p-5 flex flex-wrap items-center justify-center`}>
      <div className={`${styles.headerTop} mb-auto flex flex-wrap items-center justify-center`}>
        <p>טירפת</p>
        <button 
        onClick={() => setSound(!sound)} 
        className={`${styles.sound} relative flex justify-center items-center rounded-full`}>
          <SoundIcon data={sound} />
          <span className='rounded-full'></span>
        </button>
      </div>

      <div className={`${styles.pagination}`}>
        <Nav />
      </div>

      <div className={`${styles.logo} mt-auto`}>
        <Link href={'/'}>
         <a>
          <img src={logo.src} alt={'Logo'} />
         </a>
        </Link>
      </div>
    </header>
  )
}

export default Header