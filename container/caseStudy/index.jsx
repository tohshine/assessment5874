import React from 'react'
import style from './caseStudy.module.scss'
const  Index = () => {
  return (
    <div className={style.caseStudy__container}>
    <div className={`${style.caseStudymodule__container__text} section__padding `}>
  <h1>Case Studies</h1>
  <p>Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.</p>
    </div>
    <div className={style.caseStudy__image__container}>

<img src="./lab01.png" className={style.caseStudy__image}  alt="" srcset="" />

  
     
     
      <div className={style.caseStudyMiddle__image}>
       
        <img src="./dashboard01.png" className={style.caseStudy__image__center} alt="" srcset="" />
     
        <div className={`${style.caseStudy__secondImage__text}`}>
          <h4>Project title here</h4>
          <p>Short project description goes here To explain what the project is all about.</p>
          <div className={style.caseStudy__readMore__container}>
            <p>Read more</p>
            <div className='navbar_container_link_border'/>
          </div>
        </div>
       
      </div>
    
      <img src="./socks.png" className={style.caseStudy__image}  alt="" srcset="" />

    </div>

    </div>
  )
}

export default Index
