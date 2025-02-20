import styles from "../styles/Anuncio.module.css";

export default function Anuncio(){
    return(
        <aside className={styles.aside}>
            <img className={styles.image} src="/propaganda_mequi.jpg" alt="propaganda do mequi" />
        </aside>
    )
}