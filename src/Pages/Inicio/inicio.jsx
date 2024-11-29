import S from "./inicio.module.scss"
import balanca from "../../assets/balanca.png"
import comunidade from "../../assets/comunidade.png"
import leitor from "../../assets/leitor.png"
import punho from "../../assets/punho.png"

export default function inicio(){
    return(
        <main>
            <section className={S.banner}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={S.devoDoar}>
            <div>
                <h2>Por que devo doar?</h2>
            </div>
            <section className={S.boxCard}>
                
            <article>
                    <img src={comunidade} alt=""/>
                    <p>Ofere livro a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </article>
                <article>
                    <img src={leitor} alt=""/><p>
                   Estimule o hábito da leitura e o aprendizado contínuo. </p>
                </article>
                <article>
                    <img src={punho} alt=""/>
                    <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </article>
                <article>
                    <img src={balanca} alt=""/>
                    <p>Garante que todos, independentemente da sua condição, tenham oportunidades de aprendizado. </p>
                </article>
            </section>
        </section>
        </main>
    )
}