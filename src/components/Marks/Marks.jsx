import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Marks.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Marks = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((card, i) => (

                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt='NuestrasMarcas' />
                                </div>
                            </SwiperSlide>
                        ))

                    }


                </Swiper>
            </div>
        </section>
    )
}

export default Marks

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}