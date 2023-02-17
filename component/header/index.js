import React from 'react'
import style from './header.module.scss'
import Navbar from '../navbar'
 const Index = () => {
  return (
    <div className={style.header__container}>
      <Navbar/>
      <div className={`${style.header__container__content} section__padding  `}>
       <div className={`${style.header__content_container} `}>
       <p className={style.header__brand}>BRAND, DEV, ECOM, MARKETING</p>
        <div className={`${style.header__title_text}`}>
          <h1>We unleash <br/> <span className={`${style.header__title_faded}`}>business potential</span></h1>
        </div>

        <p className={style.header_description}>We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.</p>
        <div className={`${style.header__let__talk__container}`}>
          <p>Let`s talk</p>
          <div className={`global__pink__border`}/>
        </div>
       </div>

      </div>
      <div className={style.header__container__img}/>
    </div>
  )
}

export default Index
