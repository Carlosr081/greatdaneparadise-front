import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "./../../assets/1.jpg";
import img2 from "./../../assets/2.jpg";

export default function mainPage() {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-xs rounded-lg shadow-2xl">
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} className=" rounded-lg " />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} className=" rounded-lg " />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Welcome to Great Dane Paradise</h1>
          <p className="py-6">
            At Great Dane Paradise, we pride ourselves on five years of
            dedicated service in breeding exquisite Great Dane puppies. Our
            commitment extends far beyond the moment of purchase.
          </p>
          <button className="btn btn-primary">Contact</button>
        </div>
      </div>
    </div>
  );
}
