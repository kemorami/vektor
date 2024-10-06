import { NavLink } from 'react-router-dom'
import styles from './Basement.module.css'
function Basement(){
    return(
    <div className={styles.basement}>
        <div className={styles.catalog}>
            <b><NavLink to="/catalog" className={styles.link}>Оборудование</NavLink></b>
            <NavLink to="/catalog/equipment" className={styles.link}>Электрооборудование</NavLink>
            <NavLink to="/catalog/equipment" className={styles.link}>Светотехника</NavLink>
        </div>
        <div className={styles.catalog}>
            <b><NavLink to="/services" className={styles.link}>Монтажные работы</NavLink></b>
        </div>
        <div className={styles.catalog}>
            <NavLink to="/object" className={styles.link}>Объекты</NavLink>
            <NavLink to="/partners" className={styles.link}>Партнеры</NavLink>
            <NavLink to="/about" className={styles.link}>О компании</NavLink>
            <NavLink to="/contacts" className={styles.link}>Контакты</NavLink>
        </div>
    </div>
    )
}
export default Basement