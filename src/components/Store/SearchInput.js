import { useState, useContext } from 'react';
import DataContext from '../../context/data-context';
import styles from './Store.module.css';
const SearchInput = ({dispatch}) =>{
const [query, setQuery] = useState('');
const ctx = useContext(DataContext);



    return(
       <></>
    )
}
export default SearchInput;