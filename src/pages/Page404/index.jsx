import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Container from "../../components/Container"

function Page404(){
    return(
        <>
            <Header />
            <Container>
                <h1>AGORA VAI?</h1>
                <div>
                    <span>404</span>
                    <strong>TEM ALGO ERRADO MERMÃO</strong>
                </div>
            </Container>
            <Footer />
        </>
    )
}
export default Page404