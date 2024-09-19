import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Apresentacao(){
    return(
        <>
        <Header />
        <section className='container'>
          
          <div className='apresentacao'>
            <p>
              Olá, Hello, Hola, <br/>
              <span>Sou gente boa</span><br/>
              Dev otimo
            </p>
            <button className='btn btn-red '>saiba mais aqui</button>
          </div>
  
          <figure>
            <img className='img-apresentacao' src="/undraw_undraw_undraw_undraw_undraw_website_o7n3_bucy_30uo_-1-_d6br_0qfo.svg" alt="Imagem de apresentação" />
          </figure>

        </section>

        <section className='container2'>
          <div className='parte2'>
            <h1>Cliente</h1>
          </div>
          <div className='parte21'>
            <h1>Porfessional</h1>
          </div>
          <div className='parte22'>
            <h1>Entrar/Criar</h1>
          </div>
        </section>

        <section className='container3'>
          <div className='parte3'>
            <h1>Feedback</h1>
          </div>
          <div className='parte31'>
            <h1>Nossos desenvolvedores</h1>
          </div>
        </section>
  
        <Footer />
      </>
    )
}

export default Apresentacao