import styles from "../styles/Lista.module.css";

export default function Lista(){
    return (
        <section className={styles.section}>
            <div className={styles.divItem}>Big-Mac</div>
            <div className={styles.divItem}>Big Tasty</div>
            <div className={styles.divItem}>Quarteirão</div>
        </section>
    )
}