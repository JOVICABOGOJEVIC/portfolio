import styles from './Store.module.css';

const SearchedItem = (props) =>{
    console.log(props.key);
return(
    <p>{props.key}</p>
)
}
export default SearchedItem;