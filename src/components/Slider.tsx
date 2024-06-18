import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Importa los módulos desde swiper/modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faVideo } from '@fortawesome/free-solid-svg-icons';
import './Slider.css'; // Asegúrate de tener estilos CSS para el Slider

import imagen1 from '../assets/1.jpg';
import imagen2 from '../assets/2.jpg';
import imagen4 from '../assets/4.jpg';
import imagen5 from '../assets/5.jpg';
import imagen6 from '../assets/6.jpg';
import imagen7 from '../assets/7.jpg';

// No es necesario usar SwiperCore.use([Autoplay, Pagination, Navigation]); en versiones modernas de Swiper

const SliderComponent: React.FC = () => {
  return (
    <div className="slider-container">
      {/* Iconos de galería */}
      <div className="gallery-icons">
        <Link to="/photos" className="gallery-icon">
          <FontAwesomeIcon icon={faImages} />
          <span>Photos</span>
        </Link>
        <Link to="/videos" className="gallery-icon">
          <FontAwesomeIcon icon={faVideo} />
          <span>Videos</span>
        </Link>
      </div>
      {/* Slider */}
      <Swiper className='swiper'
        modules={[Autoplay, Pagination, Navigation]} // Asegúrate de que los módulos estén incluidos aquí
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true} // Habilita el loop para que se repita el carrusel
      >
        <SwiperSlide>
          <img src={imagen1} alt="Imagen 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen2} alt="Imagen 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen4} alt="Imagen 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen5} alt="Imagen 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen6} alt="Imagen 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen7} alt="Imagen 7" />
        </SwiperSlide>
        {/* Agrega más imágenes según sea necesario */}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
