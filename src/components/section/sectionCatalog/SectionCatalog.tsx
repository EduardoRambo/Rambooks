import { Images } from "../../../imports"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade, Pagination } from "swiper"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './sectioncatalog.css'

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
                            <img src={Images.quadrinho1} alt="Título número um" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={Images.quadrinho2} alt="Título número dois" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={Images.quadrinho3} alt="Título número três" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={Images.quadrinho4} alt="Título número quatro" />
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="livros">
                            <img src={Images.quadrinho5} alt="Título número cinco" />
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </aside>
        </section>
    )
}