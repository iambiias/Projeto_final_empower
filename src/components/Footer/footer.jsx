import face from "../../assets/logoface.png"
import insta from "../../assets/logoinsta.png"
import youtube from "../../assets/logoyt.png"
import twitter from "../../assets/logott.png"
import linkedin from "../../assets/logolinkedin.png"
import S from "./footer.module.scss"
export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial} >
                <h3>4002-8922</h3>
           <nav>
            <a href=""><img src={face} alt="Imagem da logo do Facebook"/>
            </a>
            <a href=""><img src={twitter} alt="Imagem da logo do Twitter"/>
            </a>
            <a href=""> <img src={youtube} alt="Imagem da logo do Youtube"/>
            </a>
            <a href=""><img src={linkedin} alt="Imagem da logo do Linkedin"/>
            </a>
            <a href=""><img src={insta} alt="Imagem da logo do Instagram"/>
            </a>
            
           </nav>
            </section>
            <section className={S.boxEnd}>
            <p>Layout desenvolvido pela Vai na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}