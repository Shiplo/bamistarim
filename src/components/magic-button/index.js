import React, { useEffect, useRef } from 'react';
import { gsap, Power4 } from 'gsap';
import styles from './magnetic.module.scss';

const Magnetic = ({children, ...params}) => {
    //gsap.registerPlugin(TweenMax);
    const button = useRef(null);
    var strength = 50;

    useEffect(() => {
        if(button && button.current) {
            button.current.addEventListener('mousemove', moveMagnet );
            button.current.addEventListener('mouseout', function(event) {
                gsap.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
            } );
    
            function moveMagnet(event) {
                var magnetButton = event.currentTarget
                var bounding = magnetButton.getBoundingClientRect()
    
                //console.log(magnetButton, bounding)
    
                gsap.to( magnetButton, 1, {
                    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
                    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
                    ease: Power4.easeOut
                })
            }
        }
    });

  return (
    <div ref={button} {...params}>
        {children}
    </div>
  )
}

export default Magnetic