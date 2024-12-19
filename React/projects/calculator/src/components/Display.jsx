import styles from './display.module.css'
const Display = ({displayValue}) => {
    return <input type="text" className={styles.display} value={displayValue} readOnly />
}

export default Display;