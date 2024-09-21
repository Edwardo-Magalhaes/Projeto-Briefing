import { Link } from 'react-router-dom'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"

function Entrar(){
    return(
        <>
        <Header/>
        <Container/>
            <Link to="/Inicial">Entrar/Cadastrar</Link>
            <h1>Vai</h1>
        <Footer/>
        </>
    )
}

export default Entrar