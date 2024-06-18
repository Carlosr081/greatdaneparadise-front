import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Banner from './Banner';
import logo from '../assets/logo.jpg'; // Importa la imagen del logo

interface AdminProps {
  onLogout: () => void;
}

const Admin: React.FC<AdminProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [selectedVideos, setSelectedVideos] = useState<FileList | null>(null); // Estado para los videos
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [photos, setPhotos] = useState<{ filename: string; file_id: string }[]>([]);
  const [videos, setVideos] = useState<{ filename: string; file_id: string }[]>([]); // Estado para los videos
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<string | null>(null); // Estado para el modal de videos
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState<string>('');
  const [modalFileId, setModalFileId] = useState<string>('');
  const [showGallery, setShowGallery] = useState(false); // Estado para controlar la visibilidad de la galería de fotos
  const [showVideoGallery, setShowVideoGallery] = useState(false); // Estado para controlar la visibilidad de la galería de videos

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedVideos(event.target.files);
  };

  const handleUpload = async () => {
    if (!selectedFiles) {
      setUploadStatus('Por favor, selecciona al menos un archivo.');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    try {
      const response = await axios.post('https://gdpback-c772cffb88f3.herokuapp.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadStatus('Archivos subidos con éxito.');
      fetchPhotos();
      console.log(response.data);
    } catch (error) {
      setUploadStatus('Error al subir los archivos.');
      console.error('Error uploading files:', error);
    }
  };

  const handleVideoUpload = async () => {
    if (!selectedVideos) {
      setUploadStatus('Por favor, selecciona al menos un archivo de video.');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedVideos.length; i++) {
      formData.append('files', selectedVideos[i]);
    }

    try {
      const response = await axios.post('https://gdpback-c772cffb88f3.herokuapp.com/upload_video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadStatus('Videos subidos con éxito.');
      fetchVideos();
      console.log(response.data);
    } catch (error) {
      setUploadStatus('Error al subir los videos.');
      console.error('Error uploading videos:', error);
    }
  };

  const openModal = (fileUrl: string, fileId: string, isImage: boolean) => {
    if (isImage) {
      setModalImage(fileUrl);
    } else {
      setModalVideo(fileUrl);
    }
    setModalFileId(fileId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalVideo(null);
    setIsModalOpen(false);
  };

  const handleDelete = async (fileId: string, isImage: boolean) => {
    const endpoint = isImage ? `photo/${fileId}` : `video/${fileId}`;
    try {
      await axios.delete(`https://gdpback-c772cffb88f3.herokuapp.com/${endpoint}`);
      setDeleteStatus('Archivo eliminado con éxito.');
      if (isImage) {
        fetchPhotos();
      } else {
        fetchVideos();
      }
      closeModal();
    } catch (error) {
      setDeleteStatus('Error al eliminar el archivo.');
      console.error('Error deleting file:', error);
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://gdpback-c772cffb88f3.herokuapp.com/photos');
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://gdpback-c772cffb88f3.herokuapp.com/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    fetchVideos();
  }, []);

  return (
    <div>
      <Banner logo={logo} />
      <h2>Admin</h2>
      <button onClick={handleLogout}>Cerrar sesión</button>

      <h3>Subir fotos</h3>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir</button>
      <p>{uploadStatus}</p>

      <h3>Subir videos</h3>
      <input type="file" multiple onChange={handleVideoChange} />
      <button onClick={handleVideoUpload}>Subir</button>
      <p>{uploadStatus}</p>

      <button onClick={() => setShowGallery(!showGallery)}>Fotos</button>
      {showGallery && (
        <>
          <h3>Fotos</h3>
          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.file_id} className="photo" onClick={() => openModal(`https://gdpback-c772cffb88f3.herokuapp.com/photo/${photo.file_id}`, photo.file_id, true)}>
                <img src={`https://gdpback-c772cffb88f3.herokuapp.com/photo/${photo.file_id}`} alt={photo.filename} className="photo-img" />
              </div>
            ))}
          </div>
        </>
      )}

      <button onClick={() => setShowVideoGallery(!showVideoGallery)}>Videos</button>
      {showVideoGallery && (
        <>
          <h3>Videos</h3>
          <div className="video-grid">
            {videos.map((video) => (
              <div key={video.file_id} className="video" onClick={() => openModal(`https://gdpback-c772cffb88f3.herokuapp.com/video/${video.file_id}`, video.file_id, false)}>
                <video src={`https://gdpback-c772cffb88f3.herokuapp.com/video/${video.file_id}`} controls className="video-player" />
              </div>
            ))}
          </div>
        </>
      )}

      {isModalOpen && (modalImage || modalVideo) && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal1">
            <span className="close" onClick={closeModal}>&times;</span>
            {modalImage && <img src={modalImage} alt="Imagen Ampliada" className="modal-image" />}
            {modalVideo && <video src={modalVideo} controls className="modal-video" />}
            <button onClick={() => handleDelete(modalFileId, !!modalImage)}>Eliminar {modalImage ? 'Imagen' : 'Video'}</button>
          </div>
        </div>
      )}
      <p>{deleteStatus}</p>
    </div>
  );
};

export default Admin;
