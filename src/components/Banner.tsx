import React, { useState } from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface BannerProps {
  logo: string;
}

const Banner: React.FC<BannerProps> = ({ logo }) => {
  const [showTikTokMenu, setShowTikTokMenu] = useState(false);

  const toggleTikTokMenu = () => {
    setShowTikTokMenu(!showTikTokMenu);
  };

  return (
    <div className="banner">
      <div className="logo">
        <a href='/'>
          <img src={logo} alt="Logo de la empresa" className='logo-empresa' />
        </a>
      </div>
      <div className="company-name">
        <h1>GREAT DANE PARADISE FL</h1>
      </div>
      <div className="social-icons">
        <h2>Redes sociales</h2>
        <div className="social-links">
          <a href="https://www.facebook.com/GreatDanesParadise" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/greatdaneparadisefl/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <div className="tiktok-menu" onClick={toggleTikTokMenu}>
            <FontAwesomeIcon icon={faTiktok} />
            <div className={`tiktok-menu-content ${showTikTokMenu ? 'show' : ''}`}>
              <a href="https://www.tiktok.com/@jorgecervantes1986" target="_blank" rel="noopener noreferrer">Personal</a>
              <a href="https://www.tiktok.com/discover/great-danes-paradise" target="_blank" rel="noopener noreferrer">Dogs</a>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=%2B17865807438&context=ARBNmNPgiEf5F8cduRUoCwy0qpR2fz3xM28mmZ_x8Ag2Ez7O4MuqcTCnNfNdTS_4Oon6Bfdb6ck7f17axUF34DkxjpHi2wWxBltTqdQIS4bDT-_gQHYII9SVr2_VhwWDg8SJbp11b12sJjd5-mDsaJX3bA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR04NERuSX9qCcc8sm2nnHYgIY4NX08F7WgOcD-PIoTk82oabULc647PV2I_aem_AQQYgWZyMKh-YBt9WSFc_1USJ3FIaGqkw_WKG58r89IJ1zScF1f7FmRg8L-be71rJYfA5sMAIaUnV5K65h_f6T22" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
