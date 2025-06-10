"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/projects/portafolio-1.jpg",
  "/projects/portafolio-2.jpg",
  "/projects/portafolio-3.jpg",
  "/projects/portafolio-4.jpg",
  "/projects/portafolio-5.jpg",
  "/projects/portafolio-6.jpg",
  "/projects/portafolio-7.jpg",
  "/projects/portafolio-8.jpg",
  "/projects/portafolio-9.jpg",
  "/projects/portafolio-10.jpg",
  "/projects/portafolio-11.jpg",
  "/projects/portafolio-12.jpg",
  "/projects/portafolio-13.jpg",
  "/projects/portafolio-14.jpg",
  "/projects/portafolio-15.jpg",
  "/projects/portafolio-16.jpg",
  "/projects/portafolio-17.jpg",
  "/projects/portafolio-18.jpg",
];

export default function Carousel() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="w-full h-full">
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Proyecto ${idx + 1}`}
                className="w-full h-full object-contain md:object-cover"
                style={{ maxHeight: '100vh' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
