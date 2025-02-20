import styles from '../styles/Header.module.css';

export default function Header(){
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>2TDS1</h1>
            <p className={styles.myName}>Accel LuLu</p>
        </header>
    );
}