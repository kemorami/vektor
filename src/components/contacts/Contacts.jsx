import styles from './Contacts.module.css'
function Contacts(){
    return(
        <div className={styles.main}>
            <div className={styles.contacts}>
                <h2 className={styles.h2}>Контакты</h2>
                <p className={styles.p}>Офис: 192131, г. Санкт-Петербург,<br />
                ул. Шелгунова, д.9, кор.1</p>
                <p className={styles.p}>Склад: г. Санкт-Петербург, ул.<br /> Касимовская, д.5Г</p>
                <p className={styles.p}>8 (812) 602-75-88</p>
                <p className={styles.p}>8 (812) 602-75-88</p>
            </div>
            <div className={styles.requisites}>
                <h2 className={styles.h2}>Реквизиты</h2>
                <p className={styles.p}>ООО «Эталон Инжиниринг»</p>
                <p className={styles.p}>
                ИНН 7816701363 <br />
                КПП 781101001 <br />
                ОГРН 1197847222231 <br />
                </p>
            </div>
        </div>
    )
}
export default Contacts