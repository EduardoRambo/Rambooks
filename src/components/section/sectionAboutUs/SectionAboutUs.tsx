import { Images } from "../../../imports"
import './sectionaboutus.css'

export function SectionAboutUs() {
    return (
        <section className="secao-sobre-nos" id="sobre-nos">
            <aside>
                <figure>
                    <img src={Images.sobrenos} alt="Foto com vários comics" />
                </figure>
            </aside>
            <span>
                <h3 className="h3-light">Sobre nós</h3>
                <p className="texto-sobre-nos">
                    Como amantes de quadrinhos e outras obras em andamento, sabemos como
                    pode ser trabalhoso acompanhar as datas de cada título e fazer várias
                    compras dentro do mês para se manter por dentro de suas histórias favoritas.
                    Sabendo como é passar por isso, criamos um serviço de assinatura onde de
                    uma maneira acessível, fazemos esse serviço de acompanhamento para você,
                    onde todo mês entregamos mais de mil colecionáveis para leitores de todo o Brasil.
                </p>
            </span>
        </section>
    )
}