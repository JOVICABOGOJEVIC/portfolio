import styles from './Store.module.css';

const Instruction = () => {
    return (
        <ul>
            <li>
                In hamburger menu first create a category.
            </li>
            <li>Then, when entering the article,
                select the category to which the article belongs for easier manipulation of the articles.</li>
            <li>The article will be entered in the table in black letters, but only when you click on it,
                it becomes red, and then you need to buy it.</li>
                <li>Articles can only be marked while "All articles" are displayed</li>
            <li>
            When the item was purchased,
            by clicking on the same, it becomes black again, and remains in the base for the next purchase.
            </li>
<li>The search input searches for articles, while the delete input deletes articles</li>
<li>Suggestion: Create the categories in the same order as in your favorite store</li>
        </ul>
    )
}
export default Instruction;