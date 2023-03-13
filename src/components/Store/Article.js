import { useContext,useState, useEffect, Fragment } from 'react';
import styles from './Store.module.css';

const Article = ({products, dispatch}) =>{
    return(
        <Fragment>
<span  style={{color:products.buy?'white':'#555',backgroundColor:products.buy?'#dc3545ed':''}} 
className={styles.productItem}
onClick={()=>dispatch({type:"TOGGLE_ARTICLE", payload:{id:products.key}})}>{products.article}
</span>
        </Fragment>
  )
}

export default Article;