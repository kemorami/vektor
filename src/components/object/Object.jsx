import styles from './Object.module.css'
import img1 from '../../images/img1.jpeg'
function Object(){
    return(
        <div className={styles.object_main}>
            <div className={styles.h1_div}>
                <h1 className={styles.h1}>Объекты</h1>
            </div>
            <div className={styles.objects}>
                <div className={styles.objects_column}>
                    <div className={styles.object}>
                        <img src={img1} alt="" width="300px" height="300px"/>
                        <div className={styles.text_div}>
                            <h3 className={styles.h3}>Name</h3>
                            <p className={styles.p}>Text</p>
                        </div>
                    </div>
                </div>
                <div className={styles.objects_column}>
                    <div className={styles.object}>
                        <img src={img1} alt="" width="300px" height="300px"/>
                        <div className={styles.text_div}>
                            <h3 className={styles.h3}>Name</h3>
                            <p className={styles.p}>Text</p>
                        </div>
                    </div>
                </div>
                <div className={styles.objects_column}>
                    <div className={styles.object}>
                        <img src={img1} alt="" width="300px" height="300px"/>
                        <div className={styles.text_div}>
                            <h3 className={styles.h3}>Name</h3>
                            <p className={styles.p}>Text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Object