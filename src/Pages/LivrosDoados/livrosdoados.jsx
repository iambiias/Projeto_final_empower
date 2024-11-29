import S from "./livrosdoados.module.scss"
import livro from "../../assets/livrop.png"
export default function LivrosDoados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                <article>
                    <img src={livro} alt="Imagem da capa do livro o Protagonista"/>
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}