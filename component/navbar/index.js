import React, { useState } from "react";
import style from "./navbar.module.scss";
import { nav } from "../../utility/mock";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Index = () => {
  const [active, setActive] = useState(null);
  const [toggleMenu, settoggleMenu] = useState(false);

  const RenderNav = () => {
    return nav.map((nv) => {
      return (
        <div onClick={() => setActive(nv)}>
          <p>
            <a>{nv.name}</a>
          </p>
          <div
            className={
              active &&
              active.name === nv.name &&
              'navbar_container_link_border'
            }
          />
        </div>
      );
    });
  };

  return (
    <div className={`${style.navbar__container} section__padding`}>
      <div className={style.navbar__container_image}>
        <img src="/logo.png" />
      </div>

      <div className={style.navbar__container_links}>
        <RenderNav />
      </div>

      <div className={`${style.navbar__container_links_menu} `}>
        {toggleMenu?<RiCloseLine onClick={()=>settoggleMenu(false)}/>:<RiMenu3Line onClick={()=>settoggleMenu(true)}/>}
        {toggleMenu&&<div className={`${style.navbar__container_links_menu_container} scale-up-center `}>
          <RenderNav/>
          </div>}
      </div>
    </div>
  );
};

export default Index;
