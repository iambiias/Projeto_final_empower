import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import S from "./header.module.scss"
import Inicio from "../../Pages/Inicio/inicio"
import LivrosDoados from "../../Pages/LivrosDoados/livrosdoados"
import QueroDoar from "../../Pages/QueroDoar/querodoar"
import logo from "../../assets/logo.png"
import lupa from "../../assets/lupa.png"

export default function header(){
    return(
        <BrowserRouter>
        <header>
            
            <section className={S.boxLogo}>
                <img src={logo} alt="Imagem de um livro"/>
                <h1> Livros Vai na Web</h1>
                
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to ="/livrosdoados">Livros Doados</Link></li>
                    <li><Link to="/querodoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder="O que você procura?"/>
                <img src={lupa} alt=""/>
            </div>
            
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/LivrosDoados" element={<LivrosDoados/>}/>
            <Route path="/QueroDoar" element={<QueroDoar/>}/> 

        </Routes>
        </BrowserRouter>
    )
}