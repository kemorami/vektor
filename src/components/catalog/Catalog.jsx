import styles from './Catalog.module.css'
import img1 from '../../images/img1.jpeg'
import { Link } from 'react-router-dom'
function Catalog(){
    return(
        <div className={styles.catalog}>
            <div className={styles.catalog_info}>
                <p className={styles.h1}>Оборудование</p>
                <div>
                    <p className={styles.p}>У нас в каталоге представлен широкий ассортимент кабельной продукции,<br/> электротехнических товаров и оборудования для водоснабжения и<br /> водоотведения от ведущих мировых и российских производителей.</p> <br/>
                    <p>Наши отзывчивые технические специалисты подберут оборудование под ваш<br /> проект из наличия на складе.</p>
                </div>
            </div>
            <div className={styles.card_products}>
                <div className={styles.card_product}>
                    <img src={img1} alt=""  width="210px" height="210px"/>
                    <Link to="/catalog" className={styles.name_product}>product</Link>
                </div>
            </div>
        </div>
    )
}
export default Catalog
