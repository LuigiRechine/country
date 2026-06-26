'use client';
import { useState } from 'react';
import '@/styles/gallery.css';

type Props = {
  imagens: string[];
  nome: string;
};

export default function ProductImageGallery({ imagens, nome }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="gallery-wrapper">
      <div className="thumbnails-vertical">
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${nome} vista ${index + 1}`}
            className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>

      <div className="main-image-container">
        <img
          src={imagens[selectedImage]}
          alt={nome}
          className="main-image"
        />
      </div>
    </div>
  );
}