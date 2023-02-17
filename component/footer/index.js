import React from 'react'
import style from './footer.module.scss'
const  Index = () => {
  return (
    <div className={style.footer__container}>
      <div className={`${style.footer__wrapper} section__padding`}>
      <div className={style.footer__section}>
        <h2>We’re a brands <br/><span>best friend</span> </h2>

        <div className={style.footer__let__talk}>
          <p>Let's talk</p>
          <div className='global__pink__border'/>
        </div>
      </div>
      <div className={style.footer__section}>
      <h5>EXPLORE</h5>
      <p>Service</p>
      <p>Work</p>
      <p>About</p>
      <p>Blog</p>
      <p>Careers</p>


      </div>
      <div className={style.footer__section}>
      <h5>SERVICES</h5>
      <p>Brand</p>
      <p>Development</p>
      <p>Marketing</p>
     
      </div>
      <div className={style.footer__section}>
      <h5>QUESTIONS</h5>
   <div>
   <p>Call Us</p>
   <p>0121 345 678 </p>
   </div>
   <div>
   <p>Email Us</p>
   <p> info@digitalspaniel.co.uk</p>
   </div>
     
     
      </div>
      
      </div>
      <div className={`${style.footer__copyright__container} section__padding`}>
      <p className={style.footer__copyright}>
      Copyright © Digital Spaniel 2019. All rights reserved.
      </p>
      <div>
        social icons
      </div>
     </div>
    </div>
  )
}

export default Index
