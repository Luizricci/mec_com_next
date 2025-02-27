import styles from "../styles/Lista.module.css";

export default function Lista( {title} ){
    return (
        <section className={styles.section}>
            <div className={styles.divItem}>
                <h2>{title}</h2>
            </div>
        </section>
    )
}