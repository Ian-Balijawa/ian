import '@css/testimonial.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import AVATAR from '@assets/me.png';
import { Pagination } from 'swiper';

interface ITestimonial {
    name: string;
    review: string;
    avatar: string;
}

const testimonials: ITestimonial[] = [
    {
        avatar: AVATAR,
        name: 'Allen',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur suscipit atque rem culpa quas quae, incidunt aliquam voluptas repudiandae magnam expedita eum recusandae inventore commodi similique sed laudantium asperiores delectus? Quibusdam optio sint blanditiis iste reiciendis! Tempora, sit non.',
    },
    {
        avatar: AVATAR,
        name: 'Alan',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur suscipit atque rem culpa quas quae, incidunt aliquam voluptas repudiandae magnam expedita eum recusandae inventore commodi similique sed laudantium asperiores delectus? Quibusdam optio sint blanditiis iste reiciendis! Tempora, sit non.',
    },
    {
        avatar: AVATAR,
        name: 'Nelson',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur suscipit atque rem culpa quas quae, incidunt aliquam voluptas repudiandae magnam expedita eum recusandae inventore commodi similique sed laudantium asperiores delectus? Quibusdam optio sint blanditiis iste reiciendis! Tempora, sit non.',
    },
    {
        avatar: AVATAR,
        name: 'Jackson',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur suscipit atque rem culpa quas quae, incidunt aliquam voluptas repudiandae magnam expedita eum recusandae inventore commodi similique sed laudantium asperiores delectus? Quibusdam optio sint blanditiis iste reiciendis! Tempora, sit non.',
    },
    {
        avatar: AVATAR,
        name: 'Ramma',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab aspernatur suscipit atque rem culpa quas quae, incidunt aliquam voluptas repudiandae magnam expedita eum recusandae inventore commodi similique sed laudantium asperiores delectus? Quibusdam optio sint blanditiis iste reiciendis! Tempora, sit non.',
    },
];

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
                {testimonials.map(({ avatar, name, review }, index) => (
                    <SwiperSlide className="testimonial" key={index}>
                        <div className="client__avatar">
                            <img src={avatar} alt="client avatar" />
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default Testimonial;
