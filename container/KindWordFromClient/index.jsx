import React,{useState} from 'react'
import style from './kindWordFromClient.module.scss'
import {Card} from '../../component'
import {useFetchTestimonyQuery} from '../../redux/store'
const Index = () => {
  const [active, setactive] = useState(0)
 const {data, error, isLoading} =useFetchTestimonyQuery()

if (isLoading) {
 return <div/>
}

  return (

    <div className={`${style.kindWordFromClientContainer} section__padding`}>
    <h2>Kind words <br/> <span className={style.kindword__sub_header}>from our clients</span> </h2>

   <div className={style.kindword_card}>
  {data.map((kw,i)=> <Card  kw={kw} index={i} active={active}/>)}
   </div>
     <div className={style.kindwords__dots__container}>
      {data.map((kw,i)=><div onClick={()=>setactive(i)} className={`${style.kindwords__dots} scale-up-center`} style={ {backgroundColor:active===i?"#031B34":"#EDEFF1"}}/>)}
     </div>
    </div>
  )
}
export default Index