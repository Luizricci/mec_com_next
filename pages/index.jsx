import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Lista from "../components/Lista"


export default function Home(){
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}> 
            <Lista />
                <aside className={styles.aside}>
                    <img className={styles.image} src="/propaganda_mequi.jpg" alt="propaganda do mequi" />
                </aside>
            </main>
            <Footer />
        </div>
    );
}