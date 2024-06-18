import './Aboutus.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Imagen1 from '../assets/about1.jpg';
import Imagen2 from '../assets/about2.jpg';
import Imagen3 from '../assets/about 3.jpg';
import { useRef, useEffect, useState } from 'react';

const AboutUs = () => {
  const sliderRef = useRef<Slider>(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    console.log('Autoplay state:', autoplay);
    const timer = setInterval(() => {
      if (sliderRef.current && autoplay) {
        console.log('Advancing slider...');
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [autoplay]);

  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => setAutoplay(false),
    afterChange: () => setAutoplay(true)
  };

  return (
    <div className="about-us-container" onClick={handleClick}>
      <div className="about-us-text">
        <h1>ABOUT US</h1>
        <h2>Welcome to Great Dane Paradise</h2>
        <p>
          At Great Dane Paradise, we pride ourselves on five years of dedicated service in breeding exquisite Great Dane puppies. Our commitment extends far beyond the moment of purchase. We offer a comprehensive pet care program, ensuring the health and well-being of every puppy we place in a loving home. From regular check-ups to personalized nutrition plans, our team is dedicated to providing top-notch care throughout your furry friend's life journey.
          <br/><br/>
          We Are enthusiasts and experienced breeders, passionate advocates for the breed. Our commitment to excellence shines through in every aspect of our operation, from meticulous breeding practices to ongoing training and support. Whether you're seeking a loyal companion or a potential show champion, Great Dane Paradise is your trusted partner in finding the perfect addition to your family.
          <br/><br/>
          Experience the joy of owning a Great Dane with Great Dane Paradise — where every puppy brings boundless love and endless adventure.
        </p>
      </div>
      <div className="slider-container1">
        <Slider {...settings} ref={sliderRef}>
          <div>
            <img src={Imagen1} alt="Image 1" />
          </div>
          <div>
            <img src={Imagen2} alt="Image 2" />
          </div>
          <div>
            <img src={Imagen3} alt="Image 3" />
          </div>
          {/* Agregar más imágenes según sea necesario */}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
