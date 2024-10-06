import { NavLink } from 'react-router-dom'
import styles from './Midle.module.css'
function Midle(){
    return(
        <div className={styles.miidle}>
        <h2 className={styles.h2}>Качаственный подход к каждому объекту</h2><div className={styles.bio}>
            <div className={styles.biodiv}>
                <h3>Сопровождение проекта</h3>
                <p>Инженерное консультирование, <br />
                    оптимизация проекта и расчёт <br />
                    стоимости оборудования</p>
            </div>
            <div className={styles.biodiv}>
                <h3>Сроки</h3>
                <p>Оперативная обработка <br />
                    заказов и точные сроки исполнения
                </p>
            </div>
            <div className={styles.biodiv}>
                <h3>Сопровождение проекта</h3>
                <p>Проектные скидки <br />
                    и возможность фиксации <br />
                    цены на продукцию</p>
            </div>
            <div className={styles.biodiv}>
                <h3>Сопровождение проекта</h3>
                <p>Только оригинальная <br />
                    продукция. Предоставляем <br />
                    все необходимые сертификаты и паспорта</p>
            </div>
            <div className={styles.biodiv}>
                <h3>Сопровождение проекта</h3>
                <p>Большой выбор брендов <br />
                    и возможность подбора <br />
                    аналогов нашими инженерами</p>
            </div>
            <div className={styles.biodiv}>
                <h3>Сопровождение проекта</h3>
                <p>Квалифицированный штат <br />
                    инженеров и исполнителей</p>
            </div>
        </div>
        <div className={styles.sponsor}>
            <h2 className={styles.h2}>Нашему проффесионализму доверяют</h2>
        </div>
        <div className={styles.text}>
            <p>ваш текст</p>
        </div>
        </div>
    )
}
export default Midle