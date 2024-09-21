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
              Bem-vindo ao Briefing.<br/>
              <span>Local onde suas ideias</span><br/>
              Ganham vidas
            </p>
          </div>
        
          <figure>
            <img className={styles.img_apresentacao} src="undraw_search_app_oso2.svg" alt="Imagem de apresentação" />
          </figure>

        </section>

        <section className={styles.container2}>
          <div className={styles.parte2}>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> 
              Ea, inventore ullam minima magnam architecto ducimus<br></br>
              reprehenderit quas ipsum sunt, accusamus corrupti, error<br></br>
              officiis? Asperiores nostrum quisquam minima, eveniet<br></br>
              beatae libero?</h1>
            <img className={styles.img_cliente} src="undraw_fitting_piece_re_pxay.svg" alt="Imagem do cliente" />
          </div>
          <div className={styles.parte21}>
            <img className={styles.img_cliente} src="undraw_revenue_re_2bmg.svg" alt="Imagem do profissional" />
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> 
              Ea, inventore ullam minima magnam architecto ducimus<br></br>
              reprehenderit quas ipsum sunt, accusamus corrupti, error<br></br>
              officiis? Asperiores nostrum quisquam minima, eveniet<br></br>
              beatae libero?</h1>
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