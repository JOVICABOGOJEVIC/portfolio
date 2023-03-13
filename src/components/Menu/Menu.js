import { useState, Fragment } from 'react';
import style from './Menu.module.css';

const Menu = (props) =>{

return(
    <Fragment>
        {props.isOpen &&
        <div className={style.menu}>
        <ul>
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#works">Works</a></li>
        </ul>
    </div>} 
    </Fragment>
   
)
}
export default Menu;