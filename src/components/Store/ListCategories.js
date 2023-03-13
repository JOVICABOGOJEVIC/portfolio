import { Fragment,useState } from 'react';
import styles from './Store.module.css';

const ListCategories = (props) =>{
    const [categoryItems,setCategoryItems] = useState();

const listArticles = () =>{
props.forwardListed(props.id);
}
return(
<span onClick={listArticles} style={{color:categoryItems?'white':'#dc3545',border:categoryItems?'1px solid white':'1px solid #dc3545',
    backgroundColor:categoryItems?'#dc3545':'white'}} className={styles.listCategories}
    >
      {props.categories}</span>
)}
//ODAVDE PRAVITI DISPATCH
export default ListCategories;