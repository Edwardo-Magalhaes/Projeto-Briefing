import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Apresentacao.module.css'

function Apresentacao(){
    return(
        <>
        <Header />
        <section className={styles.container1}>
          
          <div className={styles.apresentacao}>
            <p>
              Olá, Hello, Hola, <br/>
              <span>Sou gente boa</span><br/>
              Dev otimo
            </p>
            <button className={`${styles.btn} ${styles.btn_red}`}>saiba mais aqui</button>
          </div>
  
          <figure>
            <img className={styles.img_apresentacao} src="/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg" alt="Imagem de apresentação" />
          </figure>

        </section>

        <section className={styles.container2}>
          <div className={styles.parte2}>
            <h1>Cliente</h1>
          </div>
          <div className={styles.parte21}>
            <h1>Porfessional</h1>
          </div>
        </section>

        <section className={styles.container4}>
          <div className={styles.parte4}>
            <h1>Entrar/Criar</h1>
          </div>
        </section>

        <section className={styles.container3}>
          <div className={styles.parte3}>
            <h1>Feedback</h1>
          </div>
          <div className={styles.parte31}>
            <h1>Nossos desenvolvedores</h1>
          </div>
        </section>
  
        <Footer />
      </>
    )
}

export default Apresentacao