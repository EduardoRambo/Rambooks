import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './sectioncatalog.css'

import quadrinho1 from "../../../assets/img/quadrinho1.png"
import quadrinho2 from "../../../assets/img/quadrinho2.png"
import quadrinho3 from "../../../assets/img/quadrinho3.png"
import quadrinho4 from "../../../assets/img/quadrinho4.png"
import quadrinho5 from "../../../assets/img/quadrinho5.png"


export function SectionCatalog() {
    return (
        <section className="secao-catalogo" id="catalogo">
            <h3 className="h3-light">Catálogo</h3>
            <aside className="container-catalogo">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={false}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper" >
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={ quadrinho1 } alt="Título número um" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={ quadrinho2 } alt="Título número dois" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={ quadrinho3 } alt="Título número três" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={ quadrinho4 } alt="Título número quatro" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={ quadrinho5 } alt="Título número cinco" />
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </aside>
        </section>
    )
}