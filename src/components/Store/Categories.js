import { Fragment,useState } from 'react';
import styles from './Store.module.css';

const Categories = (props) =>{


    const addProductToCategory = () =>{
        props.forwardCategory(props.id);
    }

return(
  <Fragment>
     <span onClick={addProductToCategory} className={styles.categoryItem}>{props.categories}</span>
  </Fragment>
   
   
)
}

export default Categories;