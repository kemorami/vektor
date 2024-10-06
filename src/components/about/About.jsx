import styles from './About.module.css'
import img1 from '../../images/img1.jpeg'
function About(){
    return(
        <div className={styles.main}>
            <div className={styles.about}>
                <h2 className={styles.h2}>О компании</h2>
                <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis provident, magni sequi ipsa esse eaque officiis ex ut, sit voluptatum animi. Sit ex rerum aut saepe repudiandae harum nisi iure!</p>
            </div>
            <div className={styles.sert}>
                <h2 className={styles.h2_sert}>Сертификаты</h2>
                <div className={styles.serts}>
                    <img src={img1} alt="" width="150px" height="250px"/>
                </div>
            </div>
            <div className={styles.sert}>
                <h2 className={styles.h2_sert}>Лицензии</h2>
                <div className={styles.serts}>
                    <img src={img1} alt="" width="150px" height="250px"/>
                </div>
            </div>
            <div className={styles.sert}>
                <h2 className={styles.h2_sert}>Благодарности</h2>
                <div className={styles.serts}>
                    <img src={img1} alt="" width="150px" height="250px"/>
                </div>
            </div>
        </div>
    )
}
export default About