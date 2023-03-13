import { useState } from 'react';
import style from './TopBar.module.css';
import Hamburger from 'hamburger-react'

export default function TopBar(props) {
  const openMenu = () =>{
props.handleOpenMenu();
  }
  return (
    <div className={`${style.topBar}`}>
    <div className={style.wrapper}>
    <div className={style.left}>
      <a href='#intro' className={style.logo}>JB</a>
      <div className={style.itemContainer}>
      <span><i class="fa-solid fa-phone"></i>+381(60)0301207</span>
      <span><i className="fa-regular fa-envelope icon"></i>jovicabogojevic4@gmail.com</span>
      </div>
    </div>
    <div className={style.right}>
 <div className={style.hamburger} onClick={openMenu}>
 <Hamburger />
 </div>
    </div>
    </div>
    </div>
  )
}
