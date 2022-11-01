import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './nav.module.scss'

function Nav() {
    const menuItems = [
        {
            title: "המשפחה והפרידה",
            color: "#93A0C1",
            link: "/story/",
            id: 1
        },
        {
            title: "רותסמה",
            color: "#E7C1B3",
            link: "/story/room1/",
            id: 2
        },
        {
            title: "הפדיון",
            color: "#798667",
            link: "/story/room2/",
            id: 3
        },
        {
            title: "השיקום",
            color: "#EAE0BD",
            link: "/story/room3/",
            id: 4
        },
        {
            title: "פתיחה",
            color: "#FFFFFF",
            link: "/story/room4/",
            id: 5
        },
        {
            title: "סיום",
            color: "#FFFFFF",
            link: "/story/end/",
            id: 6
        }
    ]
    //console.log(menuItems[0].title)

    // Use 
    const router = useRouter();
    //console.log(router);
  return (
    <nav className={`${styles.nav}`} id="nav-menu">
        <ul className={`${styles.navList} menu relative`}>
            {menuItems.map((item) => {
                if(item.link != router.asPath) {
                    console.log("wasActive");
                } else {
                    
                }
                return(
                <li className='z-30 relative' key={item.id}>
                    <Link href={item.link} >
                        <a className={`block relative ${(item.link == router.asPath ? styles.active : "")}`}>
                            <span className={`${styles.marker} block rounded-full z-10 transition-all absolute left-2/4 top-2/4`}></span>
                            <span className={`${styles.hover} block rounded-full z-20 transition-all absolute w-full h-full top-0 right-0`}>
                                <span className={'absolute block rounded-full'} style={{borderColor: item.color}}></span>
                            </span>
                            <span 
                            className={`${styles.tooltip} overflow-hidden rounded-full h-full absolute top-0 right-0 z-30 transition-all delay-150`}>
                                <span className={`${styles.tipbg} absolute z-10 border-2 rounded-full`} style={{borderColor: item.color}}></span>
                                <span className={`${styles.tiptext} block z-20 absolute transition-all delay-200 w-full text-center`}>{item.title}</span>
                            </span>
                        </a>
                    </Link>
                </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Nav