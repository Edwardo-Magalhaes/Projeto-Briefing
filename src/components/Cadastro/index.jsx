import styles from './cadastro.module.css'
function Cadastrar(){
    return(
        <div>
            <h1>Cadastrar</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar Senha" />
                
                <button type="submit">Cadastrar</button>
            </form>
        </div>
        

    )
}

export default Cadastrar