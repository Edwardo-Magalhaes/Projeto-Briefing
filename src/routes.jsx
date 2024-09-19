import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apresentacao from "./pages/Apresentacao";
import Inicial from "./pages/Inicial";
import Entrar from "./pages/Entrar";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Apresentacao/> }></Route>
                <Route path="/Entrar" element={ <Entrar/> }></Route>
                <Route path="/Inicial" element={ <Inicial/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
