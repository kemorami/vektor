import styles from './Services.module.css'
import img1 from '../../images/img1.jpeg'
import { Link } from 'react-router-dom'
function Services(){
    return(
        <div className={styles.services}>
            <div className={styles.services_info}>
                <p className={styles.h1}>Монтажные работы</p>
            <div>
                <p className={styles.p}>ООО “Эталон Инжиниринг” реализует широкий спектр решений в области<br /> проектирования и монтажа разного рода инженерных систем.<br /></p>
                <p className={styles.p}>Мы оказываем услуги на любых объектах, используя новейшие технологии при<br /> производстве работ. Работы проведенные нашей собственной бригадой —<br /> надежны, долговечны и безопасны. Поможем реализовать все необходимые<br /> проектные решения и обеспечить своевременный ввод объекта в эксплуатацию.</p>
            </div>
            </div>
            <div className={styles.card_services}>
                <div className={styles.card_service}>
                    <img src={img1} alt=""  width="210px" height="210px"/>
                    <Link to="/catalog" className={styles.name_service}>service</Link>
                </div>
            </div>
        </div>
    )
}
export default Services