import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>Briefing</span>
            </Link>
            <nav>
                <Link to="/">Sobre o Briefing</Link> 
                <Link to="/">Serviços</Link>   
                <Link to="/">Sobre nós</Link>   
                <Link to="/Entrar">Entrar/Cadastrar</Link>
            </nav>
        </header>
    )
}

export default Header