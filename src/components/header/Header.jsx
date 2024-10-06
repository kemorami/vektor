import { Link } from 'react-router-dom'
import styles from './Header.module.css'
function Header(){
    return(
    <div className={styles.header}>
        <div className={styles.top}>
            <h1 className={styles.vector}>vector</h1>
            <div>
            <p className={styles.np}>&#9742; +7 999 999 99 99</p>
            <p className={styles.np}>&#9993; mail@mail</p>
            </div>
        </div>
            <nav className={styles.navbar}>
                <ul className={styles.navbarul}> 
                    <li className={styles.li}>
                        <Link to="/catalog" className={styles.link}>Оборудование</Link>
                        <ul className={styles.catalog}>
                            <li className={styles.li}><Link to="/catalog/equipment" className={styles.catalogitem}>Электрооборудование</Link></li>
                            <li className={styles.li}><Link to="/catalog/equipment" className={styles.catalogitem}>Светотехника</Link></li>
                        </ul>
                    </li>
                    <li ><Link to="/services" className={styles.link}>Монтажные работы</Link></li>
                    <li><Link to="/object" className={styles.link}>Объекты</Link></li>
                    <li><Link to="/partners" className={styles.link}>Партнеры</Link></li>
                    <li><Link to="/about" className={styles.link}>О компании</Link></li>
                    <li><Link to="/contacts" className={styles.link}>Контакты</Link></li>
                </ul>
            </nav>
    </div>
    )
}
export default Header