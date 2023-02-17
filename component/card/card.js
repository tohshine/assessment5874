import React from 'react'
import style from './card.module.scss'

const Card = ({kw:{name,dept, desc, img},index,active}) => {
  return (
    <div className={`${style.card__container} scale-up-center`} style={{backgroundColor:active===index &&'#031B34',padding:active===index && "2rem 1rem"}}>
      <p className={style.sub__left}>	&quot;</p>
     <p className={style.card__text} style={{color:active===index&&'#EDEFF1'}}>{desc}</p>
     <p className={style.sub__right} >	&quot;</p>
     <img src={img}></img>
     <p className={style.card_text_details} style={{color:active===index&&'#EDEFF1'}}>{name}</p>
     <p className={style.card_text_details} style={{color:active===index&&'#EDEFF1'}} >{dept}</p>
   
    </div>
  )
}

export default Card
