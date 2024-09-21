import { Link } from 'react-router-dom'
import styles from './Header2.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>Briefing</span>
            </Link>
            <nav>
                <Link to="/">Notificações</Link>   
                <Link to="/">Chat</Link>   
                <Link to="/Entrar">Perfil</Link>
            </nav>
        </header>
    )
}

export default Header