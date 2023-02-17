import React from 'react'
import style from './whatWeAllAbout.module.scss'
const  Index = () => {
  return (

    <div  >
      <h2 className='section__padding'>What are we all about?</h2>
      <div className={`${style.whatWeAllAbout__image__container} section__padding`}>
        <img src="./office01.png" alt="" srcset="" />
        <img src="./office03.png" alt="" srcset="" />
        <img src="./office04.png" alt="" srcset="" />
        <img src="./office02.png" alt="" srcset="" />

        <div className={style.whatWeAllAbout__tab__container}>
          <div className={style.whatWeAllAbout__image__tab}>
            <p>About</p>
            <div className='global__pink__border'/>
          </div>

          <div className={style.whatWeAllAbout__image__tab}>
            <p>Career</p>
            <div className='global__pink__border'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Index
