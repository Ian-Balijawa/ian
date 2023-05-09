"use client";
import "@/css/testimonial.css";
import "swiper/css";
import "swiper/css/pagination";
import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

interface ITestimonial {
  name: string;
  text: string;
  avatar: string;
}

const testimonials: ITestimonial[] = [
  {
    avatar: "/images/jk.png",
    name: "Ocen Jackson",
    text: "Working with Ian has been an absolute pleasure. As a project manager, I've been impressed with his ability to understand complex requirements and deliver high-quality code that meets our needs. he're an excellent communicator and always go above and beyond to ensure that our projects are successful. I highly recommend Ian for any software development needs.",
  },
  {
    avatar: "/images/nl.png",
    name: "Nelson Adralia",
    text: "I had the pleasure of working with Ian on a web application project, and I was blown away by his technical expertise and attention to detail. he're not only an excellent developer but also a great team player and problem-solver. Ian went above and beyond to ensure that the project was delivered on time and within budget. I would definitely work with them again and recommend them to others",
  },
  {
    avatar: "/images/rm.png",
    name: "Rammathan Nkuutu",
    text: "Working with Ian was a great experience. he demonstrated a high degree of creativity and innovation on a project that required it. his passion for software development is evident in the enthusiasm and positive attitude he bring to each project. Ian is an excellent problem-solver and collaborator, always willing to share his knowledge and expertise to help make the project a success. I highly recommend Ian for any software development project",
  },
];

export const Testimonial = () => {
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
        {testimonials.map(({ avatar, name, text }) => (
          <SwiperSlide className="testimonial" key={name}>
            <Review key={name} name={name} avatar={avatar} text={text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

interface ReviewProps {
  avatar: string;
  name: string;
  text: string;
}

const Review: FC<ReviewProps> = ({ avatar, name, text }) => {
  return (
    <>
      <div className="client__avatar">
        <img src={avatar} alt="client avatar" />
      </div>
      <h5 className="client__name">{name}</h5>
      <small className="client__review">{text}</small>
    </>
  );
};
