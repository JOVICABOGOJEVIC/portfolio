import style from './Intro.module.css';
import PortfolioImage from '../../images/portfolioImage.png';
function Intro() {
  return (
    <div className={style.intro} id="intro">
      <div className={style.left}>
      <div className={style.imgContainer}>
        <img src={PortfolioImage} alt="" />
</div>
      </div>
      <div className={style.right}>
        <div className={style.wrapper}>
          <h2>Hi there, I 'm</h2>
          <h1>Jovica Bogojevic</h1>
          <h3><span>JavaScript & React</span> Developer </h3>
        </div>
        <a href='#about'><i className="fa-solid fa-arrow-down" ></i></a>
      </div>
    </div>
  )
}

export default Intro

