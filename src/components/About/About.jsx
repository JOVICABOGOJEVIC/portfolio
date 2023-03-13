import style from './About.module.css';

function About() {
  return (
    <div id='about' className={style.about}>
        <h1>About me</h1>
        <div className={style.up}>
            <p>
            I was born in 1984 in Zrenjanin, where I finished my secondary school  
        of Electrical Engineering „Nikola Tesla“ – Zrenjanin.
         After finishing secondary school, I worked in close contact with people all the time,
          and I gained excellent communication skills. I have completed several web programming courses, 
          and I have behind me several successfully completed projects. The courses I finished are frontend 
          courses, where I made custom websites using JavaScript, HTML, CSS, as well as in working framework
           like React, Redux, Bootstrap, and I used as needed Express and MongoDB. I also have six months of 
           experience working in WordPress & Magento, mostly in content editing. I married and father of three 
           children.
            </p>
        </div>
        <div className={style.down}>
<div className={style.interestBox}>
    <i class="fa-solid fa-futbol"></i>
    <i class="fa-solid fa-film"></i>
    <i class="fa-solid fa-bicycle"></i>
    <i class="fa-solid fa-tree"></i>
    <i class="fa-solid fa-music"></i>
    </div>
    <div className={style.buttonBox}><a href='mailto:jovicabogojevic4@gmail.com'>
       <button>CONTACT ME</button> </a> </div>
        </div>
        <a href='#portfolio'><i className="fa-solid fa-arrow-down" ></i></a>

        </div>
  )
}

export default About