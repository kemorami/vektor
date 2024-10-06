import styles from './Content.module.css'
import Midle from '../midle/Midle'
function Content({children}){
    return(
    <div className={styles.content}>
        {children}
    </div>
    )
}
export default Content