import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apresentacao from "./pages/Apresentacao";
import Inicial from "./pages/Inicial";
import Entrar from "./pages/Entrar";
import Page404 from "./pages/Page404/index";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Apresentacao/> }></Route>
                <Route path="/Entrar" element={ <Entrar/> }></Route>
                <Route path="/Inicial" element={ <Inicial/> }></Route>
                <Route path="*" element={ <Page404/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
