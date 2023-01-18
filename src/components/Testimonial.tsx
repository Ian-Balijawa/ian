import '@css/testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import AVATAR from '@assets/me.png';
import { Pagination } from 'swiper';

const Testimonial = () => {
    return (
        <section id="testimonial">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
            >
                {Array.from({ length: 5 }).map((client, index) => (
                    <SwiperSlide className="testimonial" key={index}>
                        <div className="client__avatar">
                            <img src={AVATAR} alt="client avatar" />
                        </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ab aspernatur suscipit atque rem culpa quas
                            quae, incidunt aliquam voluptas repudiandae magnam
                            expedita eum recusandae inventore commodi similique
                            sed laudantium asperiores delectus? Quibusdam optio
                            sint blanditiis iste reiciendis! Tempora, sit non.
                        </small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default Testimonial;
