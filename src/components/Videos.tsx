import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';
import './Videos.css'; // Importa el archivo de estilos CSS
import logo from '../assets/logo.jpg'; // Importa la imagen del logo

const Videos = () => {
  const [videos, setVideos] = useState<{ filename: string; file_id: string }[]>([]);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://gdpback-c772cffb88f3.herokuapp.com/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const openModal = (videoUrl: string) => {
    setModalVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalVideo(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Banner */}
      <Banner logo={logo} />
      {/* Espacio debajo del banner */}
      <div className="space-below-banner" />
      {/* Galería de Videos */}
      <div className="gallery">
        <h2 className="gallery-title">Video Gallery</h2>
        <div className="video-grid">
          {/* Videos */}
          {videos.map((video) => (
            <div
              key={video.file_id}
              className="video"
              onClick={() => openModal(`https://gdpback-c772cffb88f3.herokuapp.com/video/${video.file_id}`)}
            >
              <video
                src={`https://gdpback-c772cffb88f3.herokuapp.com/video/${video.file_id}`}
                controls
                className="video-player"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Modal de video */}
      {isModalOpen && modalVideo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal1">
            <span className="close" onClick={closeModal}>&times;</span>
            <video src={modalVideo} controls className="modal-video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
