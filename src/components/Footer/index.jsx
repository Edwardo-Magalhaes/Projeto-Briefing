import styles from './Footer.module.css'
import { CiMail, CiInstagram, } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p>Conheças novas Redes sociais</p>
            </div>
            <div className={styles.redes}>

                <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                    <CiInstagram/>
                </a>

                <a href='https://x.com' target='_blank' rel='noopener noreferrer'>
                    <FaXTwitter/>
                </a>

                <a href='https://Whatsapp.com' target='_blank' rel='noopener noreferrer'>
                    <FaWhatsapp/>
                </a>

                <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
                    <IoLogoYoutube/>
                </a>

                <a href='mailto:briefing.loja@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <CiMail />
                </a>

            </div>
            <div className={styles.redes}>



                Feito por 5 indíviduos<br></br> 
                Todos dos direitos ainda não foram reservados, mas isso não é motivo para copiar o nosso site. Briefing&copy;2024<br></br> 
                
            
            </div>
        </footer>
    )
}

export default Footer