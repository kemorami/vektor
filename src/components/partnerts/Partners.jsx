import styles from './Partners.module.css'
import img1 from '../../images/img1.jpeg'
function partnerts(){
    return(
        <div className={styles.partners}>
            <div className={styles.thanks}>
                <h2 className={styles.h2}>Благодарности</h2>
                <div>
                    <img src={img1} alt="" width="225px" height="300px"/>
                </div>
            </div>
            <div className={styles.partnersMain}>
                <h2 className={styles.h2}>Партнеры</h2>
                <div className={styles.partners_div}>
                <div>
                    <div className={styles.partners_element}>
                        <img src={img1} alt="" width="200px" height="200px"/>
                        <div>
                            <h3 className={styles.h3}>Partners1</h3>
                            <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, excepturi aliquam. Maxime voluptatibus iusto doloribus ab dolorum laboriosam animi corrupti dignissimos pariatur ullam quia, autem molestiae vero recusandae voluptate? Explicabo!</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.partners_element}>
                        <img src={img1} alt="" width="200px" height="200px"/>
                        <div>
                            <h3 className={styles.h3}>Partners1</h3>
                            <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, excepturi aliquam. Maxime voluptatibus iusto doloribus ab dolorum laboriosam animi corrupti dignissimos pariatur ullam quia, autem molestiae vero recusandae voluptate? Explicabo!</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default partnerts