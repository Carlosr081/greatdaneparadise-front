import React, { useState } from 'react';
import './Contactus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para rastrear si el formulario se ha enviado

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const fullName = (document.querySelector<HTMLInputElement>('#fullName')?.value) ?? '';
      const experience = (document.querySelector<HTMLInputElement>('#experience')?.value) ?? '';
      const howYouKnow = (document.querySelector<HTMLInputElement>('#howYouKnow')?.value) ?? '';
      const lookingFor = (document.querySelector<HTMLSelectElement>('#lookingFor')?.value) ?? '';
      const color = (document.querySelector<HTMLSelectElement>('#color')?.value) ?? '';
      const pattern = (document.querySelector<HTMLSelectElement>('#pattern')?.value) ?? '';
      const services = (document.querySelector<HTMLSelectElement>('#services')?.value) ?? '';
      const phone = (document.querySelector<HTMLInputElement>('#phone')?.value) ?? '';
      const email = (document.querySelector<HTMLInputElement>('#email')?.value) ?? '';

      const response = await fetch('https://gdpback-c772cffb88f3.herokuapp.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          experience,
          howYouKnow,
          lookingFor,
          color,
          pattern,
          services,
          phone,
          email
        })
      });
      const data = await response.json();
      console.log(data);
      setShowModal(false);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contactus-container">
      <h1 className="title">CONTACT US</h1>
      <div className="buttons-container">
        {/* Contenedor del formulario */}
        <div className="form-container">
          {/* Descripción arriba del icono del formulario */}
          <div className="form-wrapper">
            <h2>Form Reservation</h2>
            <h3 className="form-description">Prepare the path for your future furry friend! Our reservation form allows you to express your preferences and details for the puppy of your dreams. From color to personality, you decide! Fill out the form and secure your spot to welcome your new life companion.</h3>
          </div>
          {/* Icono del formulario */}
          <button className="form-button" onClick={toggleModal}>
            <FontAwesomeIcon icon={faFileLines} className="form-icon" />
          </button>
        </div>
        {/* Contenedor de WhatsApp */}
        <div className="whatsapp-container">
          {/* Descripción arriba del icono de WhatsApp */}
          <div className="whatsapp-wrapper">
            <h2 className="whatsapp-description">Direct Contact via WhatsApp</h2>
            <h3>Speak directly with us via WhatsApp at Great Dane Paradise! We're here to answer your questions, assist you in choosing the perfect puppy, and finalize your order for your loyal life companion. Contact us right away and start your adventure with your ideal Great Dane!</h3>
          </div>
          {/* Icono de WhatsApp */}
          <a href="https://api.whatsapp.com/send?phone=%2B17865807438&context=ARBNmNPgiEf5F8cduRUoCwy0qpR2fz3xM28mmZ_x8Ag2Ez7O4MuqcTCnNfNdTS_4Oon6Bfdb6ck7f17axUF34DkxjpHi2wWxBltTqdQIS4bDT-_gQHYII9SVr2_VhwWDg8SJbp11b12sJjd5-mDsaJX3bA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR04NERuSX9qCcc8sm2nnHYgIY4NX08F7WgOcD-PIoTk82oabULc647PV2I_aem_AQQYgWZyMKh-YBt9WSFc_1USJ3FIaGqkw_WKG58r89IJ1zScF1f7FmRg8L-be71rJYfA5sMAIaUnV5K65h_f6T22" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          </a>
        </div>
      </div>


      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={toggleModal}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
            <button
              className="close"
              onClick={toggleModal}
              style={{ zIndex: "1001" }}
            >
              &times;
            </button>

            <h2>Fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" required />

              <label htmlFor="experience">Experience with the breed:</label>
              <input type="text" id="experience" name="experience" required />

              <label htmlFor="howYouKnow">How did you know about us?</label>
              <input type="text" id="howYouKnow" name="howYouKnow" required />

              <label htmlFor="lookingFor">You are looking for:</label>
              <select id="lookingFor" name="lookingFor" required>
                <option value="American">American</option>
                <option value="European">European</option>
                <option value="Doesn't matter">Doesn't matter</option>
              </select>

              <label htmlFor="color">You are looking for color:</label>
              <select id="color" name="color" required>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="Fawn">Fawn</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Lilac">Lilac</option>
                <option value="Doesn't matter">Doesn't matter</option>
              </select>

              <label htmlFor='pattern'>Pattern:</label>
              <select id='pattern' name='pattern' required>
                <option value='Solid'>Solid</option>
                <option value='Mantle'>Mantle</option>
                <option value='Harlequin'>Harlequin</option>
                <option value='Merle'>Merle</option>
                <option value='Brindle'>Brindle</option>
                <option value='Tan Point'>Tan point</option>
                <option value='Piebald'>Piebald</option>




              </select>
              <label htmlFor="services">You are looking for services:</label>
              <select id="services" name="services" required>
                <option value="Pets">Pets</option>
                <option value="Competition">Full Rights</option>
              </select>

              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              {/* Mostrar el mensaje de "Completado" cuando formSubmitted sea true */}
              {formSubmitted && <p className="completed-message">Completed</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
