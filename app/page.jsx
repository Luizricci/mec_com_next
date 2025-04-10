import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Lista from "../components/Lista"
import Anuncio from "../components/Anuncio"


export default function Home(){
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.listaContainer}>
                <Lista  title= "Big-Mac"/>
                <Lista title= "Quarteirão"/>
                <Lista title= "Big Tasty" />
                </div>
                <Anuncio />
            </main>
            <Footer />
        </div>
    );
}