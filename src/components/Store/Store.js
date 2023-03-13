import { useState, useReducer, useContext, Fragment } from 'react';
import Hamburger from 'hamburger-react';
import styles from './Store.module.css';
import Article from './Article';
import Categories from './Categories';
import Instruction from './Instruction';
import ListCategories from './ListCategories';

const categoryReducer = (categories, action) => {
    switch (action.type) {
        case "SAVE_CATEGORY":
            return [...categories, newCategory(action.payload.category)]
    }
}
function newCategory(category) {
    return { key: Date.now(), category: category, hasArticle: false }
}

const articleReducer = (articles, action) => {
    switch (action.type) {
        case "SAVE_ARTICLE":
            return [...articles, newArticle(action.payload.article, action.payload.id)];
        case "TOGGLE_ARTICLE":
            return (articles.map(art => {
                if (art.key === action.payload.id) {
                    return { ...art, buy: !art.buy }
                }
                return (art)
            }))
        case "DELETE_ARTICLE":
            return (articles.filter(art => art.article.toLowerCase() !== action.payload.deleteArticle));
        //TREBALO BI PRVO METODA FILTER PA MAP

    }
}

function newArticle(article, id) {
    return { key: Date.now(), article: article, id: id, buy: false }
}


const Store = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [instruction, setInstruction] = useState(false);
    const [allArticles, dispatchArticle] = useReducer(articleReducer, []);
    const [allCategories, dispatchCategory] = useReducer(categoryReducer, []);
    const [category, setCategory] = useState('');
    const [article, setArticle] = useState('');
    const [toggleButton, setToggleButon] = useState(false);
    const [boldCategory, setBoldCategory] = useState(false);
    const [product, searchProduct] = useState('');
    const [showProduct, setShowProduct] = useState(true);
    const [showListed, setShowListed] = useState(false);
    const [productsListed, setProductsListed] = useState(false);
    const [deleteArticle, setDeleteArticle] = useState('');

    const inputArticle = (e) => {
        setArticle(e.target.value);
        setBoldCategory(true)
    }

    const saveCategory = (e) => {
        e.preventDefault();
        if (category.trim().length === 0) {
            console.log('stop cats');
        } else {
            dispatchCategory({ type: "SAVE_CATEGORY", payload: { category: category } });
            setCategory('');
        }
    }

    const saveArticle = (id) => {
        if (article.trim().length === 0) {
            console.log('stop');
        } else {
            dispatchArticle({ type: "SAVE_ARTICLE", payload: { article: article, id: id } });
            setArticle('');
            setBoldCategory(false)
        }
    }
    const searchArticle = (e) => {
        e.preventDefault();
        setShowProduct(false);
    }
    const saveListedProducts = (listedProducts) => {
        setShowProduct(false);
        setShowListed(true);
        setProductsListed(allArticles.filter(pro => pro.id === listedProducts))
    }
    const resetView = () => {
        setShowProduct(true);
        setShowListed(false);
    }

    const delArticle = () => {
        dispatchArticle({ type: "DELETE_ARTICLE", payload: { deleteArticle: deleteArticle } })
    }
    const exitApp = () =>{
        props.onExitApp();
    }
    return (
        <div className={styles.myStoreApp} id='portfolio'>
            <div style={{ display: 'flex' }}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <span className={styles.logo}>myStoreApp</span>
                <div className={styles.boxControl}>
                <span onClick={exitApp} className={styles.exitApp}>Exit</span>

                {!instruction &&  <span className={styles.instruction}
                    onClick={() => setInstruction(!instruction)}>
                        View Instruction</span>}
                        {instruction &&   <span className={styles.instruction}
                    onClick={() => setInstruction(!instruction)}>
                        Close Instruction</span>}
                </div>
            </div>
            {instruction && <Instruction />}
            {isOpen && <Fragment>
                <div className={`${styles.addBox} input-group mb-3`}>
                    <input type="text" className='form-control' placeholder='Add categories' value={category}
                        onChange={(e) => setCategory(e.target.value)} />
                    <div className="input-group-append">
                        <button className='btn btn-primary' onClick={saveCategory} >Save Category</button>
                    </div>
                </div>
                <div className={`${styles.addBox} input-group mb-3`}>
                    <input type="text" className='form-control' value={article} placeholder='Add one article and select a category'
                        onChange={inputArticle} />
                    <div className="input-group-append">
                        {toggleButton && <button className='btn btn-success'  >Select category</button>}
                        {toggleButton && <button className='btn btn-success' onClick={saveArticle}>Save Article</button>}
                    </div>
                </div>
                <div className={`${styles.addBox} input-group mb-3`}>
                    <input type="text" className='form-control'
                        onChange={(e) => searchProduct(e.target.value)} placeholder='Only small letter' />
                    <div className="input-group-append">
                        <button className='btn btn-warning' onClick={searchArticle}>Search Article</button>
                    </div>
                </div>
                <div className={`${styles.addBox} input-group mb-3`}>
                    <input type="text" className='form-control' placeholder='Only small letter'
                        onChange={(e) => setDeleteArticle(e.target.value)} />
                    <div className="input-group-append">

                        <button className='btn btn-danger' onClick={delArticle}>Delete Article</button>
                    </div>
                </div> <i className='btn btn-secondary' onClick={resetView}>Display all articles</i> </Fragment>}
            <div className={styles.categoryBox}>
                {showProduct && !showListed && allArticles.sort((a, b) => a.article.localeCompare(b.article)).map(articles => {
                    return <Article key={articles.key} products={articles} dispatch={dispatchArticle} />
                })}
                {!showProduct && !showListed && allArticles.filter(el => el.article.toLowerCase().includes(product)).sort((a, b) => a.article.localeCompare(b.article)).map(articles => {
                    return <Article key={articles.key} products={articles} dispatch={dispatchArticle} />
                })}
                {showListed && productsListed.map(list => { return <Article key={list.key} products={list} dispatch={dispatchArticle} /> })}
            </div>
            <hr />
            {boldCategory && <Fragment>
                <p style={{ fontSize: '0.8em', color: 'red' }}>
                    *Add a product to one of the created categories below</p>
                <div className={styles.categoryBox}>{allCategories.map(cats => {
                    return <Categories key={cats.key} id={cats.key} categories={cats.category} hasArticle={cats.hasArticle} forwardCategory={saveArticle} />
                })}
                </div></Fragment>}
            {!boldCategory && <Fragment>

                <div className={styles.categoryBox}>{allCategories.map(cats => {
                    return <ListCategories key={cats.key} id={cats.key} categories={cats.category} hasArticle={cats.hasArticle} forwardListed={saveListedProducts} />
                })}
                </div></Fragment>}
        </div>

    )
}

export default Store;
