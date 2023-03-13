import { Fragment, useState } from 'react';
import style from './Works.module.css';
import smartWeb from'../../images/smartWeb.png';
import metronik from'../../images/metronik.png';
import elektroluks from'../../images/elektroluks.png';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [{
    id:1,
    title:'SmartWeb - Belgrade',
    desc:'Development and creation of web sites and online stores...',
    job:'Frontend Programmer',
    date:'01.05.2022. - Present',
    img:smartWeb
  },
  {
    id:2,
    title:'Metronik - Belgrade',
    desc:'Programming of fire alarm control panels and frequency regulators...',
    job:'Service application engineer',
    date:'01.07.2018. - 30.04.2022.',
    img:metronik
  },
  {
    id:3,
    title:'Elektroluks - Belgrade',
    desc:'Repair and maintenance of appliances...',
    job:'Repairer',
    date:'01.09.2010. - 30.06.2018',
    img:elektroluks
    }]
  const handleClick = (way) =>{
way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:2):
 setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0) 
  }
  return (
    <div className={style.works} id='works'>
      <h1>Work experience</h1>
      <div className={style.slider} style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        {data.map(d=>( 
              <div className={style.container}>
              <div className={style.item}>
                <div className={style.left}>
                  <div className={style.leftContainer}>
                    <div className={style.imgBox}>
                      {currentSlide === 0 &&
                      <div className={style.imgContainer}>
                      <i className="fa-solid fa-laptop-code"></i>
                         </div>}
                     {currentSlide === 1 &&
                     <Fragment>
                      <div className={style.imgContainer}>
                      <i className="fa-solid fa-laptop-code"></i>
                         </div>
                         <div className={style.imgContainer}>
                         <i class="fa-solid fa-wrench"></i>
                             </div>
                     </Fragment> }
                     {currentSlide === 2 &&
                         <div className={style.imgContainer}>
                         <i class="fa-solid fa-wrench"></i>
                             </div>
                    }                    </div>
                    <h2>{d.title}</h2>
                    <b>{d.job}   </b>
                    <p>{d.desc}   </p>
                      <span>{d.date}</span>
                  </div>
                </div>
                <div className={style.right}>
                  <img src={d.img} />
                </div>
              </div>
            </div>
        ))}
    
      </div>
      <i className={`fas fa-angle-left ${style.leftArrow}`} onClick={()=>handleClick('left')}></i>
      <i className={`fas fa-angle-right ${style.rightArrow}`} onClick={()=>handleClick()}></i>
      <em href='#works'>Author:Jovica Bogojevic </em>
    </div>
  )
}

export default Works