import { Fragment, useState } from 'react';
import style from './Portfolio.module.css';
import appStoreImage from '../../images/appStore.png';
import appRedux from '../../images/appRedux.png';
import siteAptus from '../../images/siteAptus.png';
import siteFeitiansuye from '../../images/siteFeitiansuye.png';
import PortfolioList from '../PortfolioList/PortfolioList';
function Portfolio(props) {
  const [selected, setSelected] = useState('featured');
  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view4, setView4] = useState(false);
  const portfolioList = [
    {
      id: 'appStore'
    },
    {
      id: 'appRedux'
    },
    {
      id: 'siteAptus'
    },
    {
      id: 'siteFeitiansuye'
    }
  ]
  const handleChooseProject = (id) => {
    setView1(false);
    setView2(false);
    setView3(false);
    setView4(false);
    switch (id) {
      case 'appStore':
        setView1(true)
        break;
      case 'appRedux':
        setView2(true)
        break;
      case 'siteAptus':
        setView3(true)
        break;
      case 'siteFeitiansuye':
        setView4(true)
        break;
      default:
        break;
    }

  }
  const enterApp = () =>{
props.onEnterApp();
  }
  return (
    <div className={style.portfolio} id='portfolio'>
      <h1>Portfolio</h1>
      <p>*select a project</p>
      <ul>
        {portfolioList.map((el) => (<PortfolioList key={el.id}
          id={el.id}
          title={el.title}
          active={selected === el.id}
          setSelected={setSelected}
          onChooseProject={handleChooseProject}
        />))}
      </ul>

      <div className={style.container}>
        <div className={style.item}>
          <img src={appStoreImage} />
       {view1 &&
       <div className={style.info} id='first'>
       <p><small>projectName: </small><br /><b>appStore</b></p>
       <p><small>tehnologies:</small> <br /><b>React, JavaScript</b></p>
       <p><small>dev:</small> <br /><b>100%</b></p>
       <div className={style.boxButton}>
       <a><button onClick={enterApp} className={style.infoButton}>View project</button></a> 
       </div>
     </div>}  
 
        </div>
        <div className={style.item}>
          <img src={appRedux} />
          {view2 &&
            <div className={style.info} id='second'>
            <p><small>projectName: </small><br /><b>appRedux</b></p>
            <p><small>tehnologies:</small> <br /><b>React, Redux</b></p>
            <p><small>dev:</small> <br /><b>10%</b></p>
            <div className={style.boxButton}>
       <a><button className={style.infoButton}>View project</button></a> 
       </div>
          </div>
         }
        </div>
        <div className={style.item}>
        <img src={siteAptus} />
          {view3 &&
            <div className={style.info} id='fourth'>
            <p><small>projectName: </small><br /><b>siteAptus</b></p>
            <p><small>tehnologies:</small> <br /><b>HTML, CSS</b></p>
            <p><small>dev:</small> <br /><b>100%</b></p>
            <div className={style.boxButton}>
       <a href="https://aptus.rs/"><button className={style.infoButton}>View project</button></a> 
       </div>
          </div>}
         
        </div>
        <div className={style.item}>
        <img src={siteFeitiansuye} />
          {view4 &&
              <div className={style.info} id='third'>
              <p><small>projectName: </small><br /><b>siteFeitiansuye</b></p>
              <p><small>tehnologies:</small> <br /><b>HTML, CSS</b></p>
              <p><small>dev:</small> <br /><b>80%</b></p>
              <div className={style.boxButton}>
       <a href="http://www.feitiansuye.com/"><button className={style.infoButton}>View project</button></a> 
       </div>
            </div>}
        </div>
      </div>
      <a href='#works'><i className="fa-solid fa-arrow-down" ></i></a>
    </div>
  )
}

export default Portfolio