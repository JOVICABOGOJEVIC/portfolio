import style from './PortfolioList.module.css';

const PortfolioList = (props) =>{
    const chooseProject = () =>{
        props.setSelected(props.id);
        props.onChooseProject(props.id);
    }
    return(
    <li className={props.active ? style.portfolioListActive : style.portfolioList}
    onClick={chooseProject}>
        {props.id}
    </li>
)
}

export default PortfolioList;