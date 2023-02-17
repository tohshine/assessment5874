import React,{useState} from 'react'
import style from './recentProject.module.scss'
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { recentProject, tabs} from '../../utility/mock'
const Index = () => {

const [tab, setTab] = useState('All')

  const RenderTabs = ()=>{
   return  <div className={style.recentProject__renderTab_container}>
     {
      tabs.map(tb=> <div key={tb.key} onClick={()=>setTab(tb.key)} className={style.recentProject__tab} >
      <p>{tb.name}</p>
     </div>)
    }
     </div>
  }

  const RenderImages = (tab)=>{
    
   return <div className={style.imageContainer} >
    {recentProject[tab].map((rp)=> <div className={ ` ${style.recentProject__image} `}   style={{ backgroundImage: `url(${rp.image}),linear-gradient(#eb01a5, #d13531)`, width: 300,
   height: 300}}>
    { rp.details&&<div className="">
      <h3>{rp.details.title}</h3>
      <p>{rp.details.desc}</p>
      <a href="">{rp.details.cta}</a>
    </div>}
   </div>)}
   </div> 
  }



  return (
  
    <div className={`${style.recentProject__container} section__padding`}>
      <h2 className={style.recentProject__title}>Some of our <br/> <span className={style.recentProject__subtitleHeading}>recent projects</span></h2>
     

      <RenderTabs/>
      <div className={`${style.recentBorderTabs}`}>
     <div style={{ flex:'0.25px'  }} className={ `${style.recentBorderTab} ${tab==='All'&&'global__pink__border scale-up-center '}`}/>
     <div style={{ flex:'0.25px'  }} className={`${style.recentBorderTab} ${tab==='Branding'&&'global__pink__border scale-up-center '}`}/>
     <div style={{ flex:'0.25px'  }} className={`${style.recentBorderTab} ${tab==='WebDesign'&&'global__pink__border scale-up-center'}`}/>
     <div style={{ flex:'0.25px' }} className={`${style.recentBorderTab} ${tab==='DigitalMarketing'&&'global__pink__border scale-up-center'}`}/>
      </div>
      {RenderImages(tab)}

      <div className={style.recentProject__seeMore__container}>
        <div className={style.recentProject__seeMore}>
          <p>see all work</p>
          <div className='global__pink__border'/>
        </div>

        <div className={style.recentProject__seeMore__next}>
        <div className={style.recentProject__arrow}>
          <BsChevronLeft/>
         </div>
         <div className={style.recentProject__arrow}>
          <BsChevronRight/>
         </div>
        </div>
      </div>
      
     
     </div>
      
   
  )
}
export default Index