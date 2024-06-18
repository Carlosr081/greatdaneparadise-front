import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';
import './Photos.css'; // Importa el archivo de estilos CSS
import logo from '../assets/logo.jpg'; // Importa la imagen del logo

const Photos = () => {
  const [photos, setPhotos] = useState<{ filename: string; file_id: string }[]>([]);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Cambia la URL para apuntar a tu backend en Heroku
        const response = await axios.get('https://gdpback-c772cffb88f3.herokuapp.com/photos');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Banner */}
      <Banner logo={logo} />
      {/* Espacio debajo del banner */}
      <div className="space-below-banner" />
      {/* Galería de Fotos */}
      <div className="gallery">
        <h2 className="gallery-title">Photo Gallery</h2>
        <div className="photo-grid">
          {/* Fotos */}
          {photos.map((photo) => (
            <div
              key={photo.file_id}
              className="photo"
              onClick={() => openModal(`https://gdpback-c772cffb88f3.herokuapp.com/photo/${photo.file_id}`)}
            >
              <img
                src={`https://gdpback-c772cffb88f3.herokuapp.com/photo/${photo.file_id}`}
                alt={photo.filename}
                className="photo-img"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Modal de imagen */}
      {isModalOpen && modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal1">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Imagen Ampliada" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
