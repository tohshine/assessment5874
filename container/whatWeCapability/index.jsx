import React from 'react'
import style from './whatWeCapable.module.scss'
const  Index = () => {
  return (
    <div className={`${style.what__weCapable__container} section__padding`}>
   <div className={style.what__wecapable__subcontainer1}>
    <h2 className={style.what__wecapable__header}>What are <br/> <span className={style.what__weCapable__subtext}>we  capable of</span></h2>
    <p className={style.what__wecapable__description}>
    By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
    </p>
   <div className={style.what__wecapable__ourProcess__container}>
   <p className={style.what__wecapable__ourProcess}>Our Process</p>
   <div className='global__pink__border'/>
   </div>
   </div>
   <div className={style.what__wecapable__subcontainer2}>
    <div className={style.what__weCapable__brand1}>
      <h3>Brand</h3>
      <p>Brand Stategy</p>
      <p>Logo & Name</p>
      <p>Identity & Collateral</p>
    </div>

    <div className={style.what__weCapable__brand2}>
      <h3>Development</h3>
      <p>eCommerce</p>
      <p>Web Development</p>
      <p>Mobile Apps</p>
    </div>
   </div>
   <div className={style.what__wecapable__subcontainer3}>
   <h3>Marketing</h3>
      <p>Digital</p>
      <p>Market Research</p>
    
   </div>
    </div>
  )
}

export default  Index
